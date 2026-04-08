import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { episodes } from "@/data/episodes";

export const metadata: Metadata = {
  title: "Guests | Applied Intelligence",
  description:
    "Meet the leaders building the future of AI. Browse all guests who have appeared on Applied Intelligence podcast.",
  openGraph: {
    title: "Guests | Applied Intelligence",
    description:
      "Meet the leaders building the future of AI. Browse all guests who have appeared on Applied Intelligence podcast.",
    url: "https://appliedintelligence.fm/guests",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guests | Applied Intelligence",
    description:
      "Meet the leaders building the future of AI. Browse all guests who have appeared on Applied Intelligence podcast.",
  },
  alternates: {
    canonical: "/guests",
  },
};

export default function GuestsPage() {
  const guests = episodes.filter((e) => e.guest);

  return (
    <div className="py-12">
      <h1 className="font-serif text-[32px] font-bold text-charcoal mb-2">
        Guests
      </h1>
      <p className="text-[15px] text-muted mb-9">
        Leaders building the future of AI.
      </p>

      {/* Guest grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
        {guests.map((ep) => (
          <Link
            key={ep.id}
            href={`/episodes/${ep.id}`}
            className="text-center cursor-pointer group"
          >
            <div className="w-full aspect-square rounded-xl overflow-hidden bg-[#F5F3EE] mb-3">
              {ep.photo ? (
                <Image
                  src={ep.photo}
                  alt={ep.guest}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-serif text-[32px] text-gold">
                    {ep.guest.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="text-[15px] font-semibold text-charcoal">
              {ep.guest}
            </div>
            <div className="text-[13px] text-muted">{ep.guestTitle}</div>
          </Link>
        ))}
      </div>

      {/* Guest CTA */}
      <div className="p-9 bg-[#F9F7F4] rounded-xl border border-border text-center">
        <h3 className="font-serif text-[22px] text-charcoal mb-2">
          Want to be a guest?
        </h3>
        <p className="text-[15px] text-muted mb-5">
          We feature senior leaders implementing AI in their organizations.
        </p>
        <Link
          href="/guests/apply"
          className="inline-block px-7 py-3 bg-gold text-white rounded-lg text-[15px] font-semibold hover:bg-gold-dark transition-colors"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
