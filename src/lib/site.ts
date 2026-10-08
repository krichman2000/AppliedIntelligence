/**
 * Single source of truth for the site's public origin.
 *
 * Every absolute URL on the site (canonicals, og:url, og:image, sitemap,
 * RSS feed, robots.txt, JSON-LD) must be built from SITE_URL via the helpers
 * below. Override per environment with NEXT_PUBLIC_SITE_URL.
 */

const DEFAULT_SITE_URL = "https://appliedintelligencepod.com";

function normalizeOrigin(value: string): string {
  const trimmed = value.trim().replace(/\/+$/, "");
  // Guard against a malformed env var taking down every URL on the site.
  try {
    return new URL(trimmed).toString().replace(/\/+$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const SITE_URL = normalizeOrigin(
  process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL
);

/** Bare hostname, e.g. "appliedintelligencepod.com". */
export const SITE_HOST = new URL(SITE_URL).host;

export const SITE_NAME = "Applied Intelligence";
export const SITE_TITLE = "Applied Intelligence | AI Podcast";
export const SITE_DESCRIPTION =
  "Conversations with Fortune 500 executives, Chief AI Officers, and AI company founders about what actually works when implementing AI in organizations.";
export const SITE_AUTHOR = "Keith Richman";

/** Resolve a path (or already-absolute URL) against SITE_URL. */
export function absoluteUrl(path: string = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`;
}

export function episodeUrl(id: number | string): string {
  return absoluteUrl(`/episodes/${id}`);
}

/** Site-wide fallback social image. */
export const DEFAULT_OG_IMAGE = {
  url: absoluteUrl("/og-image.png"),
  width: 1200,
  height: 630,
  alt: "Applied Intelligence Podcast",
};

const MONTHS: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

/**
 * Parse the human-readable episode date ("Aug 31, 2026") into a UTC Date,
 * independent of the server's timezone.
 */
export function parseEpisodeDate(dateStr: string): Date {
  const match = dateStr.trim().match(/^([A-Za-z]{3})[a-z]*\.?\s+(\d{1,2}),?\s+(\d{4})$/);
  if (match) {
    const month = MONTHS[match[1].toLowerCase()];
    if (month !== undefined) {
      return new Date(Date.UTC(Number(match[3]), month, Number(match[2])));
    }
  }
  return new Date(dateStr);
}

/** "YYYY-MM-DD" for schema.org datePublished / sitemap lastmod. */
export function toIsoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** Convert "40:01" or "1:02:03" to an ISO 8601 duration ("PT40M1S"). */
export function toIsoDuration(duration: string): string | undefined {
  const parts = duration.split(":").map(Number);
  if (parts.some((n) => Number.isNaN(n))) return undefined;
  let h = 0, m = 0, s = 0;
  if (parts.length === 2) [m, s] = parts;
  else if (parts.length === 3) [h, m, s] = parts;
  else return undefined;
  return `PT${h ? `${h}H` : ""}${m ? `${m}M` : ""}${s ? `${s}S` : ""}` || "PT0S";
}
