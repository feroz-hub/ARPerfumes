import Image from 'next/image';
import Link from 'next/link';
import { corporateVisuals } from '@/app/lib/brandVisuals';

type HeroSectionProps = {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

export default function HeroSection({
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: Readonly<HeroSectionProps>) {
  return (
    <section aria-labelledby="hero-title" className="relative isolate min-h-[calc(100vh-74px)] overflow-hidden">
      <Image
        src={corporateVisuals.heroImage}
        alt="Firose Enterprises luxury corporate direction"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#060504f0] via-[#090806cf] to-[#090806a8]" />
      <div className="absolute inset-0 bg-[radial-gradient(58%_48%_at_62%_20%,rgba(201,169,108,0.25)_0%,rgba(201,169,108,0)_68%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#090807]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-74px)] w-[min(1240px,calc(100%_-_1.25rem))] items-end py-14 sm:py-16 md:w-[min(1240px,calc(100%_-_2rem))] lg:items-center lg:py-20">
        <div className="max-w-[760px] rounded-[28px] border border-[#e0c8933b] bg-[linear-gradient(165deg,rgba(19,16,12,0.72),rgba(8,7,6,0.84))] p-6 backdrop-blur-[2px] sm:p-8 lg:p-10">
          <p className="inline-flex items-center rounded-full border border-[#e0c89352] bg-[#3c301f42] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-[#d6b983] sm:text-xs">
            Firose Enterprises
          </p>

          <h1
            id="hero-title"
            className="mt-5 max-w-[18ch] text-balance text-4xl font-normal leading-[1.05] tracking-[0.01em] text-[#f8f1e3] sm:text-5xl lg:text-6xl"
          >
            {title}
          </h1>

          <p className="mt-4 max-w-[62ch] text-pretty text-sm leading-relaxed text-[#b9ad96] sm:text-base">
            {subtitle}
          </p>

          <div className="mt-8 flex w-full max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row sm:justify-start">
            <Link href={primaryCtaHref} className="fe-btn-primary w-full sm:w-auto">
              {primaryCtaLabel}
            </Link>
            <Link href={secondaryCtaHref} className="fe-link-chip w-full sm:w-auto">
              {secondaryCtaLabel}
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-[11px] uppercase tracking-[0.2em] text-[#9e927b] sm:text-xs">
            <p>Established Legacy</p>
            <p>Luxury Standards</p>
            <p>Global Scale</p>
          </div>
        </div>
      </div>
    </section>
  );
}
