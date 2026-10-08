import type { Metadata } from "next";
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/site";

export type OgImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

export type PageMetadataInput = {
  /** Route path, e.g. "/about" or "/episodes/12". */
  path: string;
  title: string;
  description: string;
  /** Optional shorter description for social cards; defaults to `description`. */
  socialDescription?: string;
  type?: "website" | "article";
  /**
   * Social image for this page (relative or absolute). Defaults to the
   * site-wide generated image. Pages whose segment has its own
   * opengraph-image file get that file's (hashed) URL instead at render time.
   */
  image?: OgImage;
  publishedTime?: string;
};

/**
 * Build a complete, self-canonicalizing Metadata object for a page.
 * All URLs (canonical, og:url, og:image, twitter:image) are absolute and
 * derived from SITE_URL.
 *
 * Note: Next merges metadata shallowly, so a page that defines `openGraph`
 * replaces the root segment's file-based image. That is why the image is set
 * explicitly here rather than relying on app/opengraph-image.tsx alone.
 */
export function buildPageMetadata(input: PageMetadataInput): Metadata {
  const url = absoluteUrl(input.path);
  const socialDescription = input.socialDescription ?? input.description;
  const image: OgImage = input.image
    ? { ...DEFAULT_OG_IMAGE, ...input.image, url: absoluteUrl(input.image.url) }
    : DEFAULT_OG_IMAGE;

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": absoluteUrl("/feed.xml"),
      },
    },
    openGraph: {
      type: input.type ?? "website",
      locale: "en_US",
      siteName: SITE_NAME,
      url,
      title: input.title,
      description: socialDescription,
      images: [image],
      ...(input.type === "article" && input.publishedTime
        ? { publishedTime: input.publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: socialDescription,
      images: [image.url],
    },
  };
}
