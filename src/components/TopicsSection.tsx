import Link from "next/link";
import { topics } from "@/data/episodes";

export function TopicsSection() {
  return (
    <div className="mt-13">
      <h2 className="font-serif text-xl font-normal text-charcoal mb-5 flex items-center gap-3">
        Topics
        <span className="inline-block w-8 h-0.5 bg-gold"></span>
      </h2>
      <div className="flex flex-wrap gap-2.5">
        {topics.map((t) => (
          <Link
            key={t.name}
            href={`/topics?filter=${encodeURIComponent(t.name)}`}
            className="px-5 py-2.5 rounded-md text-sm font-medium cursor-pointer transition-all hover:-translate-y-px"
            style={{
              backgroundColor: t.bg,
              border: `1px solid ${t.border}`,
              borderLeft: `3px solid ${t.color}`,
              color: t.color,
            }}
          >
            {t.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
