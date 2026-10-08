import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FeaturedEpisode } from "@/components/FeaturedEpisode";
import { RecentEpisodes } from "@/components/RecentEpisodes";
import { TopicsSection } from "@/components/TopicsSection";
import { getFeaturedEpisode, getRecentEpisodes } from "@/data/episodes";
import { buildPageMetadata } from "@/lib/metadata";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  path: "/",
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
});

export default function Home() {
  const featured = getFeaturedEpisode();
  const recent = getRecentEpisodes();

  return (
    <main>
      <Hero />
      {featured && <FeaturedEpisode episode={featured} />}
      <RecentEpisodes episodes={recent} />
      <TopicsSection />
    </main>
  );
}
