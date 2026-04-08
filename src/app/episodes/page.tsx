import { Metadata } from "next";
import EpisodesClient from "./EpisodesClient";

export const metadata: Metadata = {
  title: "Episodes | Applied Intelligence",
  description:
    "Browse all episodes of Applied Intelligence. Conversations with Fortune 500 executives, Chief AI Officers, and AI company founders about implementing AI.",
  openGraph: {
    title: "Episodes | Applied Intelligence",
    description:
      "Browse all episodes of Applied Intelligence. Conversations with Fortune 500 executives, Chief AI Officers, and AI company founders about implementing AI.",
    url: "https://appliedintelligence.fm/episodes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Episodes | Applied Intelligence",
    description:
      "Browse all episodes of Applied Intelligence. Conversations with Fortune 500 executives, Chief AI Officers, and AI company founders about implementing AI.",
  },
  alternates: {
    canonical: "/episodes",
  },
};

export default function EpisodesPage() {
  return <EpisodesClient />;
}
