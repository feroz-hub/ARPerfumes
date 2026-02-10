import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { brandCatalog, getBrandUrl } from '@/app/lib/brands';
import styles from './brands.module.css';

export const metadata: Metadata = {
  title: 'Our Brands',
  description: 'Explore AR Perfumes, Neat & Fresh, and Femison under the FiroseEnterprises portfolio.',
};

export default function BrandsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <section className={styles.brandsShell}>
      <header className={styles.brandsHeader}>
        <p className={styles.brandsEyebrow}>FiroseEnterprises Portfolio</p>
        <h1 className={styles.brandsTitle}>Our Brands</h1>
        <p className={styles.brandsLead}>
          Category-specific consumer brands across fragrance, hygiene, and healthcare segments.
        </p>

        <nav className={styles.brandsNav} aria-label="Brands navigation">
          <Link href="/brands">Overview</Link>
          {brandCatalog.map((brand) => (
            <Link key={brand.slug} href={getBrandUrl(brand.slug)}>
              {brand.name}
            </Link>
          ))}
        </nav>
      </header>

      <div className={styles.brandsBody}>{children}</div>
    </section>
  );
}
