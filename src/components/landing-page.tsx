import Image from "next/image";
import Link from "next/link";
import { PersonOrbit } from "./person-orbit";
import type { LandingCopy } from "@/content/landing";
import { getAssetPath } from "@/lib/site-config";

const CTA_CLASS =
  "inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-white px-5 py-2.5 text-sm font-semibold tracking-tight transition-colors hover:bg-neutral-100";
const LANGUAGE_TOGGLE_CLASS =
  "inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900";

const CURRENT_YEAR = new Date().getFullYear();

export function LandingPage({ content }: { content: LandingCopy }) {
  const languageToggle =
    content.locale === "en"
      ? {
          label: "EN",
          href: "/ja",
          sr: "日本語ページに切り替える",
        }
      : {
          label: "JA",
          href: "/",
          sr: "Switch to English",
        };
  const demoVideoSrc = getAssetPath(
    content.locale === "en" ? "/whoisp_demo_en.mp4" : "/whoisp_demo_ja.mp4"
  );

  return (
    <div className="text-neutral-900" lang={content.locale}>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white py-4 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Image
              src={getAssetPath("/logo.svg")}
              alt={`${content.brand.name} logo`}
              width={116}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={languageToggle.href}
              className={`${LANGUAGE_TOGGLE_CLASS} border-neutral-900 text-neutral-900`}
              aria-label={languageToggle.sr}
            >
              <Image
                src={getAssetPath("/globe.svg")}
                alt=""
                width={18}
                height={18}
                aria-hidden
                className="h-4 w-4"
              />
              <span>{languageToggle.label}</span>
            </Link>
            <Link
              href={content.headerCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={CTA_CLASS}
            >
              <span className="md:hidden">Download</span>
              <span className="hidden md:inline">{content.headerCta.label}</span>
              {content.headerCta.icon ? (
                <span aria-hidden className="text-lg leading-none">
                  {content.headerCta.icon}
                </span>
              ) : null}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto flex min-h-screen w-full max-w-[1400px] flex-col gap-20 px-4 pb-24 pt-32 sm:px-6">
          <section className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="max-w-xl space-y-7">
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
                  {content.brand.tagline}
                </p>
                <h1 className="text-4xl font-semibold tracking-[-0.04em] text-neutral-900 sm:text-5xl lg:text-6xl">
                  {content.hero.title}
                </h1>
                <p className="text-lg text-neutral-600">{content.hero.description}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={content.hero.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={CTA_CLASS}
                >
                  {content.hero.primaryCta.label}
                  {content.hero.primaryCta.icon ? (
                    <span aria-hidden className="text-lg leading-none">
                      {content.hero.primaryCta.icon}
                    </span>
                  ) : null}
                </Link>
                {content.hero.secondaryCta ? (
                  <a
                    href={content.hero.secondaryCta.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 transition-colors hover:text-neutral-900"
                  >
                    {content.hero.secondaryCta.label}
                    {content.hero.secondaryCta.icon ? (
                      <span aria-hidden className="text-lg leading-none">
                        {content.hero.secondaryCta.icon}
                      </span>
                    ) : null}
                  </a>
                ) : null}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[520px] sm:max-w-[580px] lg:max-w-[640px]">
              <PersonOrbit />
            </div>
          </section>

          <section id="demo" className="space-y-6">
            <div className="flex flex-col items-center gap-3 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                {content.demo.title}
              </h2>
              {content.demo.description ? (
                <p className="max-w-3xl text-base text-neutral-600">
                  {content.demo.description}
                </p>
              ) : null}
            </div>
            <div className="mx-auto w-full max-w-[960px] overflow-hidden rounded-3xl border border-neutral-900 bg-black shadow-[0_24px_90px_rgba(15,15,15,0.12)]">
              <video
                key={demoVideoSrc}
                className="h-full w-full"
                autoPlay
                controls
                muted
                playsInline
                preload="metadata"
                poster={content.demo.poster}
              >
                <source src={demoVideoSrc} type="video/mp4" />
                {content.demo.fallbackText}
              </video>
            </div>
          </section>

          <section id="features" className="space-y-10">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                {content.featuresIntro.title}
              </h2>
              <p className="mx-auto max-w-2xl text-base text-neutral-600">
                {content.featuresIntro.description}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {content.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,15,15,0.06)]"
                >
                  <h3 className="text-lg font-semibold text-neutral-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="usecases" className="space-y-10">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                {content.useCases.title}
              </h2>
              <p className="mx-auto max-w-2xl text-base text-neutral-600">
                {content.useCases.description}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {content.useCases.items.map((useCase) => (
                <div
                  key={useCase.title}
                  className="flex flex-col gap-3 rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_16px_42px_rgba(15,15,15,0.05)]"
                >
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {useCase.title}
                  </h3>
                  <p className="text-sm leading-6 text-neutral-600">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="workflow"
            className="space-y-10 rounded-[40px] border border-neutral-200 bg-neutral-50 px-8 py-12 shadow-[0_24px_80px_rgba(15,15,15,0.08)]"
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                {content.workflow.title}
              </h2>
              <p className="mx-auto max-w-3xl text-base text-neutral-600">
                {content.workflow.description}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {content.workflow.steps.map((step) => (
                <div
                  key={step.title}
                  className="flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,15,15,0.08)]"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-semibold text-neutral-900">{step.title}</h3>
                  <p className="text-sm leading-6 text-neutral-600">{step.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="opensource"
            className="rounded-[40px] border border-neutral-900 bg-neutral-900 px-8 py-16 text-center text-white shadow-[0_24px_90px_rgba(15,15,15,0.12)]"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {content.openSource.title}
            </h2>
            {content.openSource.description ? (
              <p className="mt-4 text-base text-white/70">
                {content.openSource.description}
              </p>
            ) : null}
            {content.openSource.cta ? (
              <div className="mt-8 flex justify-center">
                <Link
                  href={content.openSource.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${CTA_CLASS} border-white !text-neutral-900 hover:bg-white/90 hover:!text-neutral-900`}
                >
                  {content.openSource.cta.label}
                  {content.openSource.cta.icon ? (
                    <span aria-hidden className="text-lg leading-none">
                      {content.openSource.cta.icon}
                    </span>
                  ) : null}
                </Link>
              </div>
            ) : null}
          </section>

          <section
            id="faq"
            className="space-y-8 rounded-[40px] border border-neutral-200 bg-neutral-50 px-8 py-16 shadow-[0_24px_80px_rgba(15,15,15,0.08)]"
          >
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                {content.faq.title}
              </h2>
              <p className="mx-auto max-w-3xl text-base text-neutral-600">
                {content.faq.description}
              </p>
            </div>
            <div className="space-y-4">
              {content.faq.items.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-3xl border border-neutral-200 bg-white p-6 text-left shadow-[0_16px_45px_rgba(15,15,15,0.05)]"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-neutral-900 marker:text-transparent">
                    {item.question}
                    <span className="transition-transform duration-200 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-neutral-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
      </main>

      <footer className="mx-auto flex flex-col items-center gap-6 border-t border-neutral-200 bg-neutral-900 px-4 pb-10 pt-10 text-white sm:px-6">
        <div className="text-sm text-white/80">
          &copy; {CURRENT_YEAR} {content.footer.rightsHolder}
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-white/60">
          {content.footer.links.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-white"
            >
              {link.label}
              {link.icon ? (
                <span aria-hidden className="ml-1 text-sm leading-none">
                  {link.icon}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
