'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type NavItem = {
  href: string;
  label: string;
  cta?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/brands', label: 'Our Brands' },
  { href: '/manufacturing-quality', label: 'Manufacturing & Quality' },
  { href: '/business-with-us', label: 'Business With Us' },
  { href: '/contact', label: 'Contact', cta: true },
];

function isActive(pathname: string, href: string): boolean {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function navClassName(item: NavItem, active: boolean): string {
  const base =
    'inline-flex min-h-11 items-center justify-center rounded-full border px-3.5 py-1.5 text-sm font-medium transition md:px-3';
  const activeStyle = active
    ? 'border-[#1c73aa66] bg-[#1c73aa22] text-[#0e2338]'
    : 'border-transparent text-[#4c657d] hover:-translate-y-px hover:border-[#0f4d7755] hover:bg-white/80 hover:text-[#0e2338]';
  const ctaStyle = item.cta
    ? 'border-[#0f4d7760] bg-gradient-to-r from-[#0f4d7726] to-[#1c73aa24] text-[#0f4d77] font-semibold'
    : '';

  return [base, activeStyle, ctaStyle].filter(Boolean).join(' ');
}

export default function CorporateHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#113b5f24] bg-[rgba(255,255,255,0.86)] backdrop-blur-lg">
      <div className="mx-auto flex min-h-[74px] w-[min(1200px,calc(100%_-_1.25rem))] items-center justify-between gap-3 py-2 md:w-[min(1200px,calc(100%_-_2rem))]">
        <Link
          href="/"
          className="font-semibold uppercase tracking-[0.12em] text-[#0f4d77] text-[clamp(1rem,1.8vw,1.25rem)]"
        >
          FiroseEnterprises
        </Link>

        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#0f4d7738] bg-[#1c73aa1c] px-4 py-1.5 text-sm font-semibold text-[#0f4d77] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="corporate-mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} className={navClassName(item, active)} aria-current={active ? 'page' : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {menuOpen ? (
        <nav
          id="corporate-mobile-nav"
          className="border-t border-[#113b5f1f] bg-[rgba(255,255,255,0.94)] md:hidden"
          aria-label="Mobile primary navigation"
        >
          <div className="mx-auto grid w-[min(1200px,calc(100%_-_1.25rem))] gap-2 py-3">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${navClassName(item, active)} w-full justify-start`}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
