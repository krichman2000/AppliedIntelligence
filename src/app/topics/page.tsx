import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import TopicsClient from "./TopicsClient";

export const metadata: Metadata = {
  ...buildPageMetadata({
    path: "/topics",
    title: "Topics | Applied Intelligence",
    description:
      "Browse Applied Intelligence episodes by topic. AI Strategy, Enterprise AI, AI Ethics, LLMs, AI Tools, and more.",
  }),
};

export default function TopicsPage() {
  return <TopicsClient />;
}
