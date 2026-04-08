import { Metadata } from "next";
import TopicsClient from "./TopicsClient";

export const metadata: Metadata = {
  title: "Topics | Applied Intelligence",
  description:
    "Browse Applied Intelligence episodes by topic. AI Strategy, Enterprise AI, AI Ethics, LLMs, AI Tools, and more.",
  openGraph: {
    title: "Topics | Applied Intelligence",
    description:
      "Browse Applied Intelligence episodes by topic. AI Strategy, Enterprise AI, AI Ethics, LLMs, AI Tools, and more.",
    url: "https://appliedintelligence.fm/topics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Topics | Applied Intelligence",
    description:
      "Browse Applied Intelligence episodes by topic. AI Strategy, Enterprise AI, AI Ethics, LLMs, AI Tools, and more.",
  },
  alternates: {
    canonical: "/topics",
  },
};

export default function TopicsPage() {
  return <TopicsClient />;
}
