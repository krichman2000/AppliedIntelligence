import { Metadata } from "next";
import GuestApplyClient from "./GuestApplyClient";

export const metadata: Metadata = {
  title: "Be a Guest | Applied Intelligence",
  description:
    "Apply to be a guest on Applied Intelligence podcast. We feature senior leaders implementing AI in their organizations.",
  openGraph: {
    title: "Be a Guest | Applied Intelligence",
    description:
      "Apply to be a guest on Applied Intelligence podcast. We feature senior leaders implementing AI in their organizations.",
    url: "https://appliedintelligence.fm/guests/apply",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Be a Guest | Applied Intelligence",
    description:
      "Apply to be a guest on Applied Intelligence podcast. We feature senior leaders implementing AI in their organizations.",
  },
  alternates: {
    canonical: "/guests/apply",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function GuestApplyPage() {
  return <GuestApplyClient />;
}
