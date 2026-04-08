import { episodes } from "@/data/episodes";

const SITE_URL = "https://appliedintelligence.fm";
const PODCAST_TITLE = "Applied Intelligence";
const PODCAST_DESCRIPTION =
  "Conversations with Fortune 500 executives, Chief AI Officers, and AI company founders about what actually works when implementing AI in organizations.";
const PODCAST_AUTHOR = "Keith Richman";
const PODCAST_EMAIL = "hello@appliedintelligence.fm";
const PODCAST_IMAGE = `${SITE_URL}/og-image.png`;
const PODCAST_LANGUAGE = "en-us";
const PODCAST_CATEGORIES = ["Technology", "Business", "Entrepreneurship"];

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function parseDate(dateStr: string): Date {
  // Parse dates like "Mar 24, 2026"
  return new Date(dateStr);
}

function formatRfc822Date(date: Date): string {
  return date.toUTCString();
}

function parseDuration(duration: string): number {
  // Parse duration like "55:00" or "52:30" to seconds
  const parts = duration.split(":").map(Number);
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }
  return parts[0] * 3600 + parts[1] * 60 + (parts[2] || 0);
}

export async function GET() {
  const sortedEpisodes = [...episodes].sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  );

  const items = sortedEpisodes
    .map((episode) => {
      const pubDate = formatRfc822Date(parseDate(episode.date));
      const episodeUrl = `${SITE_URL}/episodes/${episode.id}`;
      const description = episode.description || `${episode.guest}, ${episode.guestTitle}, discusses ${episode.title.toLowerCase()}.`;
      const imageUrl = episode.photo
        ? episode.photo.startsWith("http")
          ? episode.photo
          : `${SITE_URL}${episode.photo}`
        : PODCAST_IMAGE;

      return `
    <item>
      <title>${escapeXml(`${episode.guest}: ${episode.title}`)}</title>
      <link>${episodeUrl}</link>
      <guid isPermaLink="true">${episodeUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${description}]]></description>
      <itunes:author>${escapeXml(episode.guest)}</itunes:author>
      <itunes:subtitle>${escapeXml(episode.guestTitle)}</itunes:subtitle>
      <itunes:summary><![CDATA[${description}]]></itunes:summary>
      <itunes:duration>${parseDuration(episode.duration)}</itunes:duration>
      <itunes:image href="${imageUrl}" />
      <itunes:episode>${episode.id}</itunes:episode>
    </item>`;
    })
    .join("");

  const categoryTags = PODCAST_CATEGORIES.map(
    (cat) => `<itunes:category text="${escapeXml(cat)}" />`
  ).join("\n    ");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(PODCAST_TITLE)}</title>
    <link>${SITE_URL}</link>
    <language>${PODCAST_LANGUAGE}</language>
    <copyright>Copyright ${new Date().getFullYear()} ${escapeXml(PODCAST_AUTHOR)}</copyright>
    <description><![CDATA[${PODCAST_DESCRIPTION}]]></description>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <itunes:author>${escapeXml(PODCAST_AUTHOR)}</itunes:author>
    <itunes:summary><![CDATA[${PODCAST_DESCRIPTION}]]></itunes:summary>
    <itunes:type>episodic</itunes:type>
    <itunes:owner>
      <itunes:name>${escapeXml(PODCAST_AUTHOR)}</itunes:name>
      <itunes:email>${PODCAST_EMAIL}</itunes:email>
    </itunes:owner>
    <itunes:explicit>false</itunes:explicit>
    <itunes:image href="${PODCAST_IMAGE}" />
    ${categoryTags}
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
