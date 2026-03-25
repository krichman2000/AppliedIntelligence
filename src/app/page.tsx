import { Hero } from "@/components/Hero";
import { FeaturedEpisode } from "@/components/FeaturedEpisode";
import { RecentEpisodes } from "@/components/RecentEpisodes";
import { TopicsSection } from "@/components/TopicsSection";
import { Newsletter } from "@/components/Newsletter";
import { getFeaturedEpisode, getRecentEpisodes } from "@/data/episodes";

export default function Home() {
  const featured = getFeaturedEpisode();
  const recent = getRecentEpisodes();

  return (
    <main>
      <Hero />
      {featured && <FeaturedEpisode episode={featured} />}
      <RecentEpisodes episodes={recent} />
      <TopicsSection />
      <Newsletter />
    </main>
  );
}
