'use client';

import { useState, type MouseEvent } from 'react';

type BrandLink = {
  name: string;
  href: string;
  subtitle: string;
};

const BRAND_LINKS: BrandLink[] = [
  {
    name: 'Neat & Fresh',
    href: 'https://neatfresh.online',
    subtitle: 'Housekeeping & Hygiene',
  },
  {
    name: 'Future Beyond Tech',
    href: 'https://futurebeyondtech.in',
    subtitle: 'Engineering & Technology',
  },
];

export default function BrandNavigation() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [activeBrand, setActiveBrand] = useState('');

  function handleClick(event: MouseEvent<HTMLAnchorElement>, brand: BrandLink) {
    event.preventDefault();
    if (isRedirecting) return;

    setIsRedirecting(true);
    setActiveBrand(brand.name);

    // 300-500ms transition window for smooth UX before hard redirect.
    window.setTimeout(() => {
      window.location.href = brand.href;
    }, 400);
  }

  return (
    <>
      {isRedirecting ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 backdrop-blur-[2px]" role="status" aria-live="polite">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-2xl">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-slate-700" aria-hidden="true" />
            <p className="text-sm font-medium text-slate-800">Opening {activeBrand}...</p>
          </div>
        </div>
      ) : null}

      <nav className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_46px_-28px_rgba(15,23,42,0.45)]" aria-label="Brand navigation">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-slate-900">Brand Navigation</h2>
          <p className="mt-1 text-sm text-slate-600">Access dedicated websites for each operating brand.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {BRAND_LINKS.map((brand) => (
            <a
              key={brand.name}
              href={brand.href}
              target="_self"
              rel="noopener noreferrer"
              onClick={(event) => handleClick(event, brand)}
              className="group rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
              aria-label={`Visit ${brand.name}`}
            >
              {/* Use <a> for external domains so crawlers and browsers treat this as standard outbound navigation. */}
              <p className="text-base font-semibold text-slate-900">{brand.name}</p>
              <p className="mt-0.5 text-sm text-slate-600">{brand.subtitle}</p>
              <span className="mt-3 inline-flex items-center text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">
                Visit site
              </span>
            </a>
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-500">
          {/* Same-tab is the corporate default to keep one clear journey and avoid extra-tab clutter during business flow. */}
          Navigation opens in the same tab for a continuous, professional browsing experience.
        </p>
      </nav>
    </>
  );
}
