const platforms = [
  {
    name: "YouTube",
    description: "Watch full video episodes",
    href: "https://www.youtube.com/@AppliedIntelligencePod",
    cta: "Subscribe",
  },
  {
    name: "Spotify",
    description: "Listen on Spotify",
    href: "https://open.spotify.com/show/1fAca5esIdo2HnFb9IkN8y?si=8fd16ec8da14443a",
    cta: "Follow",
  },
  {
    name: "Apple Podcasts",
    description: "Listen on Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/applied-intelligence/id1876696602",
    cta: "Follow",
  },
  {
    name: "TikTok",
    description: "Follow for clips and highlights",
    href: "https://www.tiktok.com/@appliedintelligen",
    cta: "Subscribe",
  },
];

export default function PlatformsPage() {
  return (
    <main className="py-12">
      <h1 className="font-serif text-3xl font-bold text-charcoal mb-3">
        Platforms
      </h1>
      <p className="text-muted mb-10">
        Subscribe and follow Applied Intelligence on your favorite platform.
      </p>

      <div className="grid gap-4">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 border border-border rounded-lg hover:border-charcoal transition-colors group"
          >
            <div>
              <h2 className="font-medium text-lg text-charcoal group-hover:text-accent transition-colors">
                {platform.name}
              </h2>
              <p className="text-muted text-sm mt-1">{platform.description}</p>
            </div>
            <span className="px-4 py-2 bg-charcoal text-white text-sm font-medium rounded-full group-hover:bg-accent transition-colors">
              {platform.cta}
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}
