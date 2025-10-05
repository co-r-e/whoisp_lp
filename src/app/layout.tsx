import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { landingContent } from "@/content/landing";
import { alternateLocales, siteUrl } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultContent = landingContent.en;
const metadataLanguages: Record<string, string> = { en: "/" };
for (const locale of alternateLocales) {
  metadataLanguages[locale] = `/${locale}`;
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultContent.meta.title,
    template: `%s | ${defaultContent.brand.name}`,
  },
  description: defaultContent.meta.description,
  alternates: {
    canonical: "/",
    languages: metadataLanguages,
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: defaultContent.brand.name,
    title: defaultContent.meta.title,
    description: defaultContent.meta.description,
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/logo.svg`,
        width: 116,
        height: 32,
        alt: `${defaultContent.brand.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultContent.meta.title,
    description: defaultContent.meta.description,
    images: [`${siteUrl}/logo.svg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: defaultContent.brand.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    description: defaultContent.meta.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    url: siteUrl,
  } as const;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landingContent.en.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } as const;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="whoisp-software-jsonld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script id="whoisp-faq-jsonld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(faqJsonLd)}
        </Script>
        {children}
      </body>
    </html>
  );
}
