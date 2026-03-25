export default function AboutPage() {
  return (
    <div className="py-12">
      <h1 className="font-serif text-[32px] font-bold text-charcoal mb-8">
        About
      </h1>

      <h2 className="font-serif text-[22px] font-bold text-charcoal mb-3">
        The show
      </h2>
      <p className="text-base text-body leading-relaxed mb-3">
        Applied Intelligence is a podcast about what happens when senior leaders
        actually try to implement AI in their organizations. Not the hype, not
        the theory — the real stories of what works, what doesn&apos;t, and what
        keeps them up at night.
      </p>
      <p className="text-base text-body leading-relaxed mb-9">
        Each episode features an in-depth conversation with a Fortune 500
        executive, Chief AI Officer, or AI company founder who&apos;s in the
        trenches making billion-dollar bets on artificial intelligence. We also
        publish shorter episodes breaking down the most important AI news of the
        week.
      </p>

      <h2 className="font-serif text-[22px] font-bold text-charcoal mb-3">
        The host
      </h2>
      <div className="flex gap-6 items-start flex-wrap">
        <div className="w-[120px] h-[120px] rounded-xl bg-[#F5F3EE] flex-shrink-0 flex items-center justify-center">
          <span className="font-serif text-[40px] text-gold">K</span>
        </div>
        <div className="flex-1 min-w-[260px]">
          <p className="text-base text-body leading-relaxed mb-3">
            Keith is a serial entrepreneur and digital media operator who runs a
            portfolio of brands across eCommerce, content, and supplements.
            He&apos;s been building online businesses since the early days of
            the internet and is now fully AI-native — using AI tools across
            every part of his operation.
          </p>
          <p className="text-base text-body leading-relaxed">
            Applied Intelligence grew out of Keith&apos;s own journey
            implementing AI across his businesses, and his belief that the most
            valuable AI conversations happen with people who are actually doing
            the work — not just talking about it.
          </p>
        </div>
      </div>
    </div>
  );
}
