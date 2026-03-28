import Link from "next/link";
import { Metadata } from "next";
import { episodes, getTopicByName } from "@/data/episodes";
import { notFound } from "next/navigation";

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
  const description =
    episode.description ||
    `${episode.guest}, ${episode.guestTitle}, joins Applied Intelligence to discuss ${episode.title.toLowerCase()}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://appliedintelligence.fm/episodes/${episode.id}`,
      images: episode.photo
        ? [
            {
              url: episode.photo,
              width: 400,
              height: 400,
              alt: episode.guest,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: episode.photo ? [episode.photo] : undefined,
    },
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
    </div>
  );
}
