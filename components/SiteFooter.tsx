import Link from 'next/link';
import styles from '@/styles/components.module.css';

const FOOTER_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/brands', label: 'Our Brands' },
  { href: '/brands/ar-perfumes', label: 'AR Perfumes' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteFooter() {
  return (
    <footer className={styles.siteFooter}>
      <div className={`${styles.container} ${styles.footerInner}`}>
        <p className={styles.footerBrand}>AR PERFUME</p>

        <nav className={styles.footerNav} aria-label="Footer navigation">
          {FOOTER_LINKS.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.footerSocial}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            IG
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            FB
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
            X
          </a>
        </div>

        <p className={styles.footerCopy}>© {new Date().getFullYear()} AR Perfume. All rights reserved.</p>
      </div>
    </footer>
  );
}
