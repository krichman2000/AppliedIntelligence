"use client";

import { useState } from "react";
import Link from "next/link";
import { episodes, topics } from "@/data/episodes";

export default function EpisodesPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const filtered = filter
    ? episodes.filter((e) => e.topics?.includes(filter))
    : episodes;

  return (
    <div className="py-12">
      <h1 className="font-serif text-[32px] font-bold text-charcoal mb-2">
        Episodes
      </h1>
      <p className="text-[15px] text-muted mb-7">Browse all conversations.</p>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-7">
        <button
          onClick={() => setFilter(null)}
          className={`px-4 py-1.5 rounded-full text-[13px] font-medium cursor-pointer transition-all ${
            !filter
              ? "bg-charcoal text-white border border-charcoal"
              : "bg-transparent text-muted border border-border hover:border-charcoal"
          }`}
        >
          All
        </button>
        {topics.map((t) => (
          <button
            key={t.name}
            onClick={() => setFilter(t.name)}
            className="px-4 py-1.5 rounded-full text-[13px] font-medium cursor-pointer transition-all"
            style={{
              background: filter === t.name ? t.bg : "transparent",
              color: filter === t.name ? t.color : "#8B8680",
              border: `1px solid ${filter === t.name ? t.border : "#E5E1D8"}`,
            }}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Episode list */}
      {filtered.map((ep, i) => (
        <Link
          key={ep.id}
          href={`/episodes/${ep.id}`}
          className={`flex justify-between items-center py-[18px] cursor-pointer transition-colors hover:bg-black/[0.015] ${
            i === 0 ? "border-t border-border" : ""
          } border-b border-border`}
        >
          <div>
            <div className="text-base font-semibold text-charcoal mb-1">
              {ep.title}
            </div>
            <div className="text-sm text-muted">
              {ep.guest}, {ep.guestTitle} &middot; {ep.date}
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
