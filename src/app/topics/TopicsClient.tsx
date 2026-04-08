"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { episodes, topics } from "@/data/episodes";

function TopicsContent() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  const filtered = filter
    ? episodes.filter((e) => e.topics?.includes(filter))
    : episodes;

  return (
    <div className="py-12">
      <h1 className="font-serif text-[32px] font-bold text-charcoal mb-2">
        Topics
      </h1>
      <p className="text-[15px] text-muted mb-7">
        Browse episodes by topic.
      </p>

      {/* Topic buttons */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        <Link
          href="/topics"
          className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
            !filter
              ? "bg-charcoal text-white"
              : "bg-transparent text-muted border border-border hover:border-charcoal"
          }`}
        >
          All Topics
        </Link>
        {topics.map((t) => (
          <Link
            key={t.name}
            href={`/topics?filter=${encodeURIComponent(t.name)}`}
            className="px-5 py-2.5 rounded-md text-sm font-medium cursor-pointer transition-all hover:-translate-y-px"
            style={{
              backgroundColor: filter === t.name ? t.color : t.bg,
              color: filter === t.name ? "white" : t.color,
              border: `1px solid ${t.border}`,
              borderLeft: `3px solid ${t.color}`,
            }}
          >
            {t.name}
          </Link>
        ))}
      </div>

      {filter && (
        <p className="text-sm text-muted mb-4">
          Showing {filtered.length} episode{filtered.length !== 1 ? "s" : ""} in{" "}
          <span className="font-medium text-charcoal">{filter}</span>
        </p>
      )}

      {/* Episode list */}
      {filtered.length > 0 ? (
        filtered.map((ep, i) => (
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
        ))
      ) : (
        <p className="text-muted py-8 text-center">
          No episodes found for this topic.
        </p>
      )}
    </div>
  );
}

export default function TopicsClient() {
  return (
    <Suspense fallback={<div className="py-12">Loading...</div>}>
      <TopicsContent />
    </Suspense>
  );
}
