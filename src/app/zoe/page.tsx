import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoe is Awesome | Applied Intelligence",
  description:
    "A profile of Zoe Richman — player 6 for Breakers FC and student at Windward.",
  openGraph: {
    title: "Zoe is Awesome | Applied Intelligence",
    description:
      "A profile of Zoe Richman — player 6 for Breakers FC and student at Windward.",
    url: "https://appliedintelligence.fm/zoe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoe is Awesome | Applied Intelligence",
    description:
      "A profile of Zoe Richman — player 6 for Breakers FC and student at Windward.",
  },
  alternates: {
    canonical: "/zoe",
  },
};

export default function ZoePage() {
  return (
    <div className="py-12">
      <h1 className="font-serif text-[32px] font-bold text-charcoal mb-3">
        Zoe is Awesome
      </h1>
      <p className="text-[15px] text-muted mb-8">
        Player 6 · Breakers FC · Windward
      </p>

      <h2 className="font-serif text-[22px] font-bold text-charcoal mb-3">
        On the pitch
      </h2>
      <p className="text-base text-body leading-relaxed mb-3">
        Zoe Richman wears number 6 for Breakers FC, and she wears it well. She
        plays the kind of soccer that changes the shape of a game — reading the
        field a beat ahead of everyone else, winning the ball back before the
        other team knows it&apos;s gone, and springing her teammates forward
        with a pass that always seems to find the right foot.
      </p>
      <p className="text-base text-body leading-relaxed mb-9">
        Coaches love a number 6 who does the unglamorous work, and Zoe does it
        with a smile. She competes for every ball, backs up every teammate, and
        never lets her head drop when the game gets hard. That combination of
        grit and generosity is exactly why Breakers FC is a better team with her
        on the field.
      </p>

      <h2 className="font-serif text-[22px] font-bold text-charcoal mb-3">
        Off the pitch
      </h2>
      <p className="text-base text-body leading-relaxed mb-3">
        When she&apos;s not playing for Breakers FC, Zoe is a student at
        Windward, where the same curiosity and drive she brings to soccer show
        up in the classroom. She&apos;s the kind of person who asks good
        questions, sticks up for her friends, and makes the people around her
        want to be a little bit better.
      </p>
      <p className="text-base text-body leading-relaxed">
        Player, student, teammate, friend — Zoe Richman is awesome, and this
        page exists simply to say so.
      </p>
    </div>
  );
}
