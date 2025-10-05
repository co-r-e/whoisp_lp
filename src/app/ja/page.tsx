import LandingPage from "@/components/landing-page";
import { landingContent } from "@/content/landing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: landingContent.ja.meta.title,
  description: landingContent.ja.meta.description,
  keywords: landingContent.ja.meta.keywords,
  alternates: {
    canonical: "/ja",
    languages: {
      en: "/",
      ja: "/ja",
    },
  },
};

export default function JapaneseHome() {
  return <LandingPage content={landingContent.ja} />;
}
