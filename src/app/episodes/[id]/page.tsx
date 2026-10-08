import Link from "next/link";
import { Metadata } from "next";
import { episodes, getTopicByName } from "@/data/episodes";
import { notFound } from "next/navigation";
import { TranscriptSection } from "@/components/TranscriptSection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";
import {
  SITE_AUTHOR,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  episodeUrl,
  parseEpisodeDate,
  toIsoDate,
  toIsoDuration,
} from "@/lib/site";
import type { Episode } from "@/data/episodes";

function episodeDescription(episode: Episode): string {
  return (
    episode.description ||
    `${episode.guest}, ${episode.guestTitle}, joins Applied Intelligence to discuss ${episode.title.toLowerCase()}.`
  );
}

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return episodes.map((ep) => ({
    id: String(ep.id),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const episode = episodes.find((ep) => ep.id === Number(id));

  if (!episode) {
    return {
      title: "Episode Not Found | Applied Intelligence",
    };
  }

  const title = `${episode.guest} on ${episode.title} | Applied Intelligence`;

  return buildPageMetadata({
    path: `/episodes/${episode.id}`,
    title,
    description: episodeDescription(episode),
    type: "article",
    publishedTime: parseEpisodeDate(episode.date).toISOString(),
    image: episode.photo
      ? { url: episode.photo, width: 400, height: 400, alt: episode.guest }
      : undefined,
  });
}

function buildEpisodeJsonLd(episode: Episode) {
  const url = episodeUrl(episode.id);
  const published = parseEpisodeDate(episode.date);
  const description = episodeDescription(episode);
  const image = episode.photo ? absoluteUrl(episode.photo) : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    "@id": url,
    url,
    name: episode.title,
    description,
    datePublished: toIsoDate(published),
    episodeNumber: episode.id,
    timeRequired: toIsoDuration(episode.duration),
    image,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: SITE_AUTHOR,
    },
    actor: {
      "@type": "Person",
      name: episode.guest,
      jobTitle: episode.guestTitle,
    },
    partOfSeries: {
      "@type": "PodcastSeries",
      "@id": `${SITE_URL}/#podcast`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(episode.youtubeId
      ? {
          associatedMedia: {
            "@type": "VideoObject",
            name: `${episode.guest}: ${episode.title}`,
            description,
            uploadDate: toIsoDate(published),
            duration: toIsoDuration(episode.duration),
            thumbnailUrl: `https://i.ytimg.com/vi/${episode.youtubeId}/hqdefault.jpg`,
            embedUrl: `https://www.youtube.com/embed/${episode.youtubeId}`,
            contentUrl: `https://www.youtube.com/watch?v=${episode.youtubeId}`,
          },
        }
      : {}),
  };
}

export default async function EpisodeDetailPage({ params }: Props) {
  const { id } = await params;
  const episode = episodes.find((ep) => ep.id === Number(id));

  if (!episode) {
    notFound();
  }

  return (
    <div className="py-12">
      <JsonLd data={buildEpisodeJsonLd(episode)} />
      <Link
        href="/episodes"
        className="inline-flex items-center gap-1.5 text-sm text-gold mb-7 hover:underline"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C8A96E"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        All episodes
      </Link>

      <h1 className="font-serif text-[32px] font-bold text-charcoal mb-2 leading-tight">
        {episode.title}
      </h1>
      <p className="text-base text-muted mb-1.5">
        with {episode.guest} — {episode.guestTitle}
      </p>
      <p className="text-[13px] text-muted-light mb-8">
        {episode.date} &middot; {episode.duration}
      </p>

      {/* YouTube video embed */}
      {episode.youtubeId ? (
        <div className="w-full aspect-video rounded-xl mb-8 overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${episode.youtubeId}`}
            title={episode.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      ) : (
        <div className="w-full h-[360px] bg-[#111] rounded-xl mb-8 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-white/50 text-[13px]">Video coming soon</span>
          </div>
        </div>
      )}

      {episode.description && (
        <p className="text-base text-body leading-relaxed mb-8">
          {episode.description}
        </p>
      )}

      {episode.topics && episode.topics.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {episode.topics.map((t) => {
            const topic = getTopicByName(t);
            return topic ? (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-full text-[13px] font-medium"
                style={{
                  backgroundColor: topic.bg,
                  border: `1px solid ${topic.border}`,
                  color: topic.color,
                }}
              >
                {t}
              </span>
            ) : null;
          })}
        </div>
      )}

      {episode.transcript && (
        <TranscriptSection transcript={episode.transcript} />
      )}

      <div className="mt-14">
        <NewsletterSignup />
      </div>
    </div>
  );
}
