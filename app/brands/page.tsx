import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { brandCatalog, getBrandUrl } from '@/app/lib/brands';
import { brandVisuals } from '@/app/lib/brandVisuals';
import styles from './brands.module.css';

export const metadata: Metadata = {
  title: 'Our Brands',
  description: 'Portfolio overview of AR Perfumes, Neat & Fresh, and Femison under Firose Enterprises.',
};

export default function BrandsOverview() {
  return (
    <main className={styles.brandPage}>
      <section className={styles.portfolioHero}>
        <p className={styles.brandItemTag}>FIROSE Brand Portfolio</p>
        <h2 className={styles.portfolioHeroTitle}>Explore Every Brand Landing Experience</h2>
        <p className={styles.portfolioHeroLead}>
          Each brand is presented with clear positioning, category-relevant visuals, and direct conversion actions for
          customer and business inquiries.
        </p>

        <div className={styles.chipRow}>
          <p className={styles.chip}>Fragrance</p>
          <p className={styles.chip}>Housekeeping</p>
          <p className={styles.chip}>Healthcare</p>
          <p className={styles.chip}>Distributor Ready</p>
        </div>
      </section>

      <ul className={styles.brandList}>
        {brandCatalog.map((brand) => (
          <li key={brand.slug}>
            <Link href={getBrandUrl(brand.slug)} className={styles.brandVisualCard}>
              <div className={styles.brandVisualMedia}>
                <Image
                  src={brandVisuals[brand.slug].cardImage}
                  alt={brandVisuals[brand.slug].alt}
                  fill
                  className={styles.brandVisualImage}
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                />
                <div className={styles.brandVisualOverlay} />
                <p className={styles.brandVisualCategory}>{brand.category}</p>
              </div>

              <div className={styles.brandVisualBody}>
                <h3 className={styles.brandItemTitle}>{brand.name}</h3>
                <p className={styles.brandVisualFocus}>{brandVisuals[brand.slug].focus}</p>
                <p className={styles.brandItemText}>{brand.portfolioDescription}</p>
                <p className={styles.brandVisualHighlight}>{brandVisuals[brand.slug].highlight}</p>
                <span className={styles.brandVisualAction}>Open Landing Page</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.actionRow}>
        <Link href="/" className={styles.backLink}>
          Back to Home
        </Link>
        <Link href="/business-with-us" className={styles.inlineBrandAction}>
          Business Inquiry
        </Link>
      </div>
    </main>
  );
}
