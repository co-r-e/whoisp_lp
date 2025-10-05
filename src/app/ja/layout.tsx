import Script from "next/script";
import { landingContent } from "@/content/landing";
import { siteUrl } from "@/lib/site-config";

export default function JapaneseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jaContent = landingContent.ja;

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: jaContent.brand.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    description: jaContent.meta.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
      availability: "https://schema.org/InStock",
    },
    url: `${siteUrl}/ja`,
    inLanguage: "ja",
  } as const;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: jaContent.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    inLanguage: "ja",
  } as const;

  return (
    <>
      <Script id="whoisp-software-jsonld-ja" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(organizationJsonLd)}
      </Script>
      <Script id="whoisp-faq-jsonld-ja" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
      {children}
    </>
  );
}
