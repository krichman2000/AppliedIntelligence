import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${SITE_NAME} Podcast
# ${SITE_URL}

User-agent: *
Allow: /

# Sitemap
Sitemap: ${absoluteUrl("/sitemap.xml")}

# AI Crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Anthropic-AI
Allow: /

User-agent: Google-Extended
Allow: /
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
