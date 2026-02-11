import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { brandCatalog, getBrandUrl } from './lib/brands';
import { brandVisuals, corporateVisuals } from './lib/brandVisuals';

const CORPORATE_WHATSAPP = 'https://wa.me/919790600220?text=Hello%20FiroseEnterprises%2C%20I%20would%20like%20to%20connect.';
const CORPORATE_INDIAMART = 'https://www.indiamart.com/firose-enterpriseschennai/';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Firose Enterprises is a trusted multi-brand group across fragrance, hygiene, and healthcare categories.',
};

export default function Home() {
  return (
    <main className="fe-main fe-ambient-drift">
      <section className="fe-panel-strong fe-reveal relative overflow-hidden p-5 sm:p-7 lg:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_130%_at_0%_0%,rgba(28,115,170,0.14)_0%,rgba(28,115,170,0)_62%)]"
        />

        <div className="relative grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div className="grid gap-4">
            <p className="fe-badge fe-reveal fe-delay-1">Corporate Group</p>
            <h1 className="fe-reveal fe-delay-2 max-w-[15ch] text-4xl font-semibold leading-tight sm:text-5xl text-[#0f4d77]">
              FIROSE ENTERPRISES
            </h1>
            <p className="fe-reveal fe-delay-3 max-w-[68ch] text-base sm:text-lg text-[#4a6279]">
              One group with focused consumer brands across fragrance, hygiene, and healthcare, built on quality systems
              and distribution-ready operations.
            </p>

            <div className="fe-reveal fe-delay-4 grid grid-cols-2 gap-2 text-sm text-[#37566f] sm:flex sm:flex-wrap">
              <p className="rounded-full border border-[#113b5f30] bg-white/90 px-3 py-1.5 text-center">Brand Portfolio</p>
              <p className="rounded-full border border-[#113b5f30] bg-white/90 px-3 py-1.5 text-center">Quality-Led Ops</p>
              <p className="rounded-full border border-[#113b5f30] bg-white/90 px-3 py-1.5 text-center">Channel Expansion</p>
              <p className="rounded-full border border-[#113b5f30] bg-white/90 px-3 py-1.5 text-center">Fast Support</p>
            </div>

            <div className="fe-reveal fe-delay-4 grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
              <Link href="/brands" className="fe-btn-primary">
                Explore Brand Landing Pages
              </Link>
              <Link href="/contact" className="fe-link-chip">
                Contact Team
              </Link>
              <a href={CORPORATE_WHATSAPP} target="_blank" rel="noopener noreferrer" className="fe-link-chip">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="fe-reveal fe-delay-3 fe-interactive-media fe-shine relative rounded-3xl border border-[#113b5f30] bg-white/70 shadow-[0_18px_40px_rgba(10,58,90,0.2)]">
            <div className="relative h-[260px] w-full sm:h-[320px]">
              <Image
                src={corporateVisuals.heroImage}
                alt="Firose corporate growth and strategy visual"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092640b5] via-[#09264059] to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 grid gap-1 p-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#d4e9ff]">Who We Are</p>
              <p className="text-base font-semibold sm:text-lg">Scalable Consumer Brand Platform</p>
              <p className="max-w-[48ch] text-sm text-[#e4f0ff]">
                FIROSE builds trusted category brands with quality discipline and execution clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="fe-panel fe-reveal fe-delay-1 p-4 sm:p-6 lg:p-7">
        <header className="grid gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f4d77]">Brand Portfolio</h2>
          <p className="max-w-[72ch] text-[#4a6279]">
            Each brand has a dedicated landing flow with focused messaging, relevant product context, and direct contact
            actions.
          </p>
        </header>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {brandCatalog.map((brand, index) => {
            const visual = brandVisuals[brand.slug];

            return (
              <article
                key={brand.slug}
                className="fe-stagger-card overflow-hidden rounded-3xl border border-[#113b5f28] bg-white shadow-[0_12px_28px_rgba(10,58,90,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(10,58,90,0.2)]"
                style={{ animationDelay: `${120 + index * 90}ms` }}
              >
                <div className="fe-interactive-media relative h-48 w-full">
                  <Image
                    src={visual.cardImage}
                    alt={visual.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2c47bd] to-transparent" />
                  <p className="absolute bottom-3 left-3 fe-badge border-white/40 bg-white/20 text-white">
                    {brand.category}
                  </p>
                </div>

                <div className="grid gap-2 p-4">
                  <h3 className="text-xl font-semibold text-[#0e2338]">{brand.name}</h3>
                  <p className="text-sm text-[#4a6279]">{visual.highlight}</p>
                  <p className="text-sm text-[#4a6279]">{brand.shortDescription}</p>
                  <Link href={getBrandUrl(brand.slug)} className="mt-1 fe-link-chip">
                    Open Brand Landing
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="fe-panel fe-reveal fe-delay-2 grid gap-4 p-4 sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="fe-interactive-media fe-shine relative overflow-hidden rounded-3xl border border-[#113b5f2d]">
          <div className="relative h-[240px] sm:h-[300px]">
            <Image
              src={corporateVisuals.supportImage}
              alt="Firose product and operations support"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2c47b8] to-transparent" />
          </div>
          <p className="absolute bottom-3 left-3 rounded-full border border-white/35 bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white">
            Process-Led Operations
          </p>
        </div>

        <div className="grid gap-3">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f4d77]">Why Businesses Choose FIROSE</h2>
          <p className="max-w-[72ch] text-[#4a6279]">
            FIROSE combines category specialization with disciplined execution so partners can expand confidently.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            <p className="rounded-2xl border border-[#113b5f28] bg-white/90 px-4 py-3 text-sm text-[#4a6279]">
              Quality checkpoints across sourcing, manufacturing, and release.
            </p>
            <p className="rounded-2xl border border-[#113b5f28] bg-white/90 px-4 py-3 text-sm text-[#4a6279]">
              Structured support for distributors, institutions, and modern trade.
            </p>
            <p className="rounded-2xl border border-[#113b5f28] bg-white/90 px-4 py-3 text-sm text-[#4a6279]">
              Clear brand architecture with dedicated landing experiences.
            </p>
            <p className="rounded-2xl border border-[#113b5f28] bg-white/90 px-4 py-3 text-sm text-[#4a6279]">
              Direct contact channels for faster conversion and onboarding.
            </p>
          </div>
        </div>
      </section>

      <section className="fe-panel fe-reveal fe-delay-3 p-4 sm:p-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f4d77]">Industries Served</h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {[
            'Fragrance & Personal Identity',
            'Housekeeping & Hygiene',
            'Baby Care & Wellness',
            'Retail & Distribution',
            'Modern Trade Support',
          ].map((item) => (
            <p
              key={item}
              className="rounded-full border border-[#113b5f2b] bg-white/90 px-4 py-2 text-center text-sm text-[#4a6279]"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="fe-panel-strong fe-reveal fe-delay-4 p-4 sm:p-6 lg:p-7">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f4d77]">Start a Business Conversation</h2>
        <p className="mt-2 max-w-[72ch] text-[#4a6279]">
          For distribution, bulk procurement, or category expansion opportunities, connect directly with our corporate team.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
          <Link href="/business-with-us" className="fe-btn-primary">
            Business With Us
          </Link>
          <Link href="/contact" className="fe-link-chip">
            Contact Us
          </Link>
          <a href={CORPORATE_INDIAMART} target="_blank" rel="noopener noreferrer" className="fe-link-chip">
            IndiaMART Profile
          </a>
          <a href={CORPORATE_WHATSAPP} target="_blank" rel="noopener noreferrer" className="fe-link-chip">
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
