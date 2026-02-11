import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { DivisionDefinition } from '@/app/lib/divisions';

type DivisionCardProps = {
  division: DivisionDefinition;
  animationDelayMs?: number;
};

function ExternalLinkIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 4h8v8" />
      <path d="M7 13l9-9" />
      <path d="M16 11v5H4V4h5" />
    </svg>
  );
}

export default function DivisionCard({ division, animationDelayMs = 0 }: Readonly<DivisionCardProps>) {
  const isTech = division.theme === 'tech';
  const ctaLabel = division.ctaLabel ?? (division.external ? 'Visit Website' : 'Open Division');
  const cardClassName =
    'fe-stagger-card group overflow-hidden rounded-3xl border border-[#e0c8932a] bg-[linear-gradient(165deg,rgba(20,17,13,0.9),rgba(10,9,7,0.95))] text-[#f5ecdb] shadow-[0_14px_34px_rgba(0,0,0,0.42)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.52)]';
  const categoryClassName = isTech
    ? 'absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full border border-[#f4dbac66] bg-[#4a3a245c] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-[#ecd2a0]'
    : 'absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full border border-[#f4dbac55] bg-[#382d1d66] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-[#ecd2a0]';
  const descriptionClassName = 'text-sm text-[#b7ac97]';
  const actionClassName =
    'mt-1 inline-flex w-fit items-center gap-1 rounded-full border border-[#e0c89366] bg-[#32271975] px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#f3e8d1] transition hover:border-[#e0c893aa] hover:bg-[#4535239a]';

  return (
    <article className={cardClassName} style={{ animationDelay: `${animationDelayMs}ms` } as CSSProperties}>
      <div className="fe-interactive-media relative h-52 w-full">
        <Image
          src={division.image}
          alt={division.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080705f2] via-[#0c0a08b8] to-transparent" />
        <p className={categoryClassName}>{division.category}</p>
      </div>

      <div className="grid gap-2 p-4">
        <h3 className="text-xl font-normal text-[#f8f1e3]">{division.name}</h3>
        <p className={descriptionClassName}>{division.description}</p>

        {division.external ? (
          <a
            href={division.href}
            target="_self"
            rel="noopener noreferrer"
            className={actionClassName}
            aria-label={`Visit ${division.name} website`}
          >
            {ctaLabel}
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        ) : (
          <Link href={division.href} className={actionClassName} aria-label={`Open ${division.name} division page`}>
            {ctaLabel}
          </Link>
        )}
      </div>
    </article>
  );
}
