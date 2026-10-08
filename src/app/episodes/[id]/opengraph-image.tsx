import { episodes } from "@/data/episodes";
import { OG_CONTENT_TYPE, OG_SIZE, renderEpisodeImage, renderSiteImage } from "@/lib/og";

type Props = {
  params: Promise<{ id: string }>;
};

export const alt = "Applied Intelligence Podcast episode";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return episodes.map((ep) => ({ id: String(ep.id) }));
}

export default async function Image({ params }: Props) {
  const { id } = await params;
  const episode = episodes.find((ep) => ep.id === Number(id));
  return episode ? renderEpisodeImage(episode) : renderSiteImage();
}
