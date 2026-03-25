import Link from "next/link";
import { Episode } from "@/data/episodes";

type Props = {
  episodes: Episode[];
};

export function RecentEpisodes({ episodes }: Props) {
  return (
    <div className="mt-13">
      <h2 className="font-serif text-xl font-normal text-charcoal mb-5 flex items-center gap-3">
        Recent Episodes
        <span className="inline-block w-8 h-0.5 bg-gold"></span>
      </h2>
      {episodes.map((ep, i) => (
        <Link
          key={ep.id}
          href={`/episodes/${ep.id}`}
          className={`flex items-center justify-between py-[18px] cursor-pointer transition-colors hover:bg-black/[0.015] rounded-sm ${
            i === 0 ? "border-t border-border" : ""
          } border-b border-border`}
        >
          <div>
            <div className="text-base font-semibold text-charcoal mb-1">
              {ep.title}
            </div>
            <div className="text-sm text-muted">
              {ep.guest}, {ep.guestTitle}
            </div>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C8A96E"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      ))}
    </div>
  );
}
