import Link from "next/link";

const platforms = [
  {
    name: "YouTube",
    color: "#FF0000",
    desc: "Watch interviews on video",
    url: "#",
  },
  {
    name: "Spotify",
    color: "#1DB954",
    desc: "Listen on Spotify",
    url: "#",
  },
  {
    name: "Apple Podcasts",
    color: "#9933CC",
    desc: "Listen on Apple Podcasts",
    url: "#",
  },
  {
    name: "Amazon Music",
    color: "#00A8E1",
    desc: "Listen on Amazon",
    url: "#",
  },
  {
    name: "RSS Feed",
    color: "#F5A623",
    desc: "Add to your podcast app",
    url: "#",
  },
];

export default function SubscribePage() {
  return (
    <div className="py-12">
      <h1 className="font-serif text-[32px] font-bold text-charcoal mb-2">
        Subscribe
      </h1>
      <p className="text-[15px] text-muted mb-9">
        Listen and watch wherever you prefer.
      </p>

      <div className="flex flex-col gap-3">
        {platforms.map((p) => (
          <PlatformLink key={p.name} platform={p} />
        ))}
      </div>
    </div>
  );
}

function PlatformLink({ platform }: { platform: typeof platforms[0] }) {
  return (
    <a
      href={platform.url}
      className="group flex items-center justify-between p-[18px] px-5 border border-border rounded-[10px] cursor-pointer transition-all hover:shadow-md"
      style={
        {
          "--platform-color": platform.color,
        } as React.CSSProperties
      }
    >
      <div className="flex items-center gap-3.5">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: platform.color }}
        >
          <span className="text-white font-bold text-base">
            {platform.name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="text-base font-semibold text-charcoal">
            {platform.name}
          </div>
          <div className="text-[13px] text-muted">{platform.desc}</div>
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
    </a>
  );
}
