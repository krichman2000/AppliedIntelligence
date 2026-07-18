import Link from "next/link";
import { Metadata } from "next";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Newsletter | Applied Intelligence",
  description:
    "Subscribe to the Applied Intelligence newsletter — new episodes and short, practical notes on what actually works when implementing AI in organizations.",
  openGraph: {
    title: "Newsletter | Applied Intelligence",
    description:
      "New episodes and short, practical notes on what actually works when implementing AI in organizations.",
    url: "https://appliedintelligence.fm/newsletter",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletter | Applied Intelligence",
    description:
      "New episodes and short, practical notes on what actually works when implementing AI in organizations.",
  },
  alternates: {
    canonical: "/newsletter",
  },
};

export default function NewsletterPage() {
  return (
    <div className="py-12">
      <Link
        href="/"
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
        Home
      </Link>

      <div className="max-w-[560px]">
        <h1 className="font-serif text-[32px] font-bold text-charcoal mb-3 leading-tight">
          The Applied Intelligence newsletter
        </h1>
        <p className="text-[15px] text-muted mb-9 leading-relaxed">
          Conversations with senior leaders who are actually implementing AI —
          distilled into your inbox. Get new episodes and the practical
          takeaways that don&rsquo;t make it into the show notes. No hype, no
          spam.
        </p>

        <NewsletterSignup
          variant="plain"
          heading="Subscribe"
          subheading="Join operators and executives following what works in enterprise AI."
        />
      </div>
    </div>
  );
}
