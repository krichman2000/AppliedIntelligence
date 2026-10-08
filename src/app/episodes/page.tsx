import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import EpisodesClient from "./EpisodesClient";

export const metadata: Metadata = buildPageMetadata({
  path: "/episodes",
  title: "Episodes | Applied Intelligence",
  description:
    "Browse all episodes of Applied Intelligence. Conversations with Fortune 500 executives, Chief AI Officers, and AI company founders about implementing AI.",
});

export default function EpisodesPage() {
  return <EpisodesClient />;
}
