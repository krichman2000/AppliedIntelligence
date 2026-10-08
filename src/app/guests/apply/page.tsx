import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import GuestApplyClient from "./GuestApplyClient";

export const metadata: Metadata = {
  ...buildPageMetadata({
    path: "/guests/apply",
    title: "Be a Guest | Applied Intelligence",
    description:
      "Apply to be a guest on Applied Intelligence podcast. We feature senior leaders implementing AI in their organizations.",
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function GuestApplyPage() {
  return <GuestApplyClient />;
}
