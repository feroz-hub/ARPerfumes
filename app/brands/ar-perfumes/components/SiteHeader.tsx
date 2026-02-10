'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './arPerfumes.module.css';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/brands', label: 'Our Brands' },
  { href: '/brands/ar-perfumes', label: 'AR Perfumes' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function isActive(pathname: string, href: string): boolean {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <Link href="/" className={styles.siteLogo}>
          AR PERFUME
        </Link>

        <button
          type="button"
          className={styles.navToggle}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((current) => !current)}
        >
          Menu
        </button>

        <nav className={styles.siteNav} aria-label="Main navigation">
          {NAV_LINKS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${active ? styles.activeNavLink : ''}`.trim()}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {menuOpen ? (
        <nav id="mobile-navigation" className={`${styles.container} ${styles.mobileNav}`} aria-label="Mobile navigation">
          {NAV_LINKS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${active ? styles.activeNavLink : ''}`.trim()}
                aria-current={active ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
