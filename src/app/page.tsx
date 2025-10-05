import LandingPage from "@/components/landing-page";
import { landingContent } from "@/content/landing";
import { siteUrl, getAssetPath } from "@/lib/site-config";
import type { Metadata } from "next";

const content = landingContent.en;
const ogImageUrl = `${siteUrl}${getAssetPath("/logo.svg")}`;

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  keywords: content.meta.keywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ja: "/ja",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: content.meta.title,
    description: content.meta.description,
    siteName: content.brand.name,
    locale: "en_US",
    alternateLocale: ["ja_JP"],
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${content.brand.name} - ${content.brand.tagline}`,
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.description,
    images: [ogImageUrl],
    creator: "@core_inc",
    site: "@core_inc",
  },
};

export default function Home() {
  return <LandingPage content={landingContent.en} />;
}
