"use client";

import { useState } from "react";

type Props = {
  transcript: string;
};

export function TranscriptSection({ transcript }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split transcript into paragraphs
  const paragraphs = transcript.split("\n\n").filter(Boolean);
  const previewParagraphs = paragraphs.slice(0, 3);
  const hasMore = paragraphs.length > 3;

  return (
    <div className="mt-10 pt-8 border-t border-border">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 mb-4 group cursor-pointer"
      >
        <h2 className="font-serif text-[22px] font-bold text-charcoal">
          Transcript
        </h2>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8B8680"
          strokeWidth="2"
          strokeLinecap="round"
          className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div className="text-base text-body leading-relaxed space-y-4">
        {(isExpanded ? paragraphs : previewParagraphs).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-gold text-[15px] font-medium hover:underline cursor-pointer"
        >
          {isExpanded ? "Show less" : `Show full transcript`}
        </button>
      )}
    </div>
  );
}
