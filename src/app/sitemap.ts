import { MetadataRoute } from "next";
import { episodes } from "@/data/episodes";
import { SITE_URL, absoluteUrl, episodeUrl, parseEpisodeDate } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const episodeDates = episodes.map((episode) => parseEpisodeDate(episode.date));
  // Listing pages change whenever an episode is published.
  const latestEpisodeDate = new Date(
    Math.max(...episodeDates.map((d) => d.getTime()))
  );

  const episodeUrls: MetadataRoute.Sitemap = episodes.map((episode, i) => ({
    url: episodeUrl(episode.id),
    lastModified: episodeDates[i],
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: latestEpisodeDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/episodes"),
      lastModified: latestEpisodeDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/guests"),
      lastModified: latestEpisodeDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Evergreen pages: no reliable modification date, so lastmod is omitted
    // rather than faked with the build time.
    {
      url: absoluteUrl("/topics"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/about"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/platforms"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/newsletter"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...episodeUrls,
  ];
}
