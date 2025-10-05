import LandingPage from "@/components/landing-page";
import { landingContent } from "@/content/landing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: landingContent.en.meta.title,
  description: landingContent.en.meta.description,
  keywords: landingContent.en.meta.keywords,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ja: "/ja",
    },
  },
};

export default function Home() {
  return <LandingPage content={landingContent.en} />;
}
