import Link from "next/link";

export function Newsletter() {
  return (
    <div className="mt-13 flex items-center justify-between flex-wrap gap-4">
      <div>
        <h2 className="font-serif text-xl font-bold text-charcoal mb-1.5">
          Newsletter
        </h2>
        <p className="text-[15px] text-muted">
          Get the best ideas from the podcast each week.
        </p>
      </div>
      <Link
        href="/subscribe"
        className="px-6 py-2.5 border border-gold rounded-md text-sm font-semibold text-gold hover:bg-gold hover:text-white transition-colors flex items-center gap-2"
      >
        Subscribe <span className="text-base">&rsaquo;</span>
      </Link>
    </div>
  );
}
