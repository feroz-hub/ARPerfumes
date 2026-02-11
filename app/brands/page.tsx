import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  AR_PERFUMES_WEBSITE_URL,
  FBT_WEBSITE_URL,
  NEAT_FRESH_WEBSITE_URL,
  divisionCatalog,
} from '@/app/lib/divisions';
import styles from './brands.module.css';

const FEMISON_WEBSITE_URL = 'https://femison.in';
const DIVISION_PAGE_ROUTES: Partial<Record<string, string>> = {
  'ar-perfumes': '/brands/ar-perfumes',
  femison: '/brands/femison',
  'neat-fresh': '/brands/neat-fresh',
  'future-beyond-technology': '/brands/future-beyond-technology',
};
const DIVISION_WEBSITE_ROUTES: Partial<Record<string, string>> = {
  'ar-perfumes': AR_PERFUMES_WEBSITE_URL,
  femison: FEMISON_WEBSITE_URL,
  'neat-fresh': NEAT_FRESH_WEBSITE_URL,
  'future-beyond-technology': FBT_WEBSITE_URL,
};

export const metadata: Metadata = {
  title: 'Our Divisions',
  description:
    'Portfolio overview of AR Perfumes, Femison, Neat & Fresh, and Future Beyond Technology under Firose Enterprises.',
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

export default function BrandsOverview() {
  return (
    <main className={styles.brandPage}>
      <section className={styles.portfolioHero}>
        <p className={styles.brandItemTag}>FIROSE Division Architecture</p>
        <h2 className={styles.portfolioHeroTitle}>Explore Every Division</h2>
        <p className={styles.portfolioHeroLead}>
          FIROSE ENTERPRISES combines consumer-focused brands with an AI-driven technology division for diversified,
          long-horizon growth.
        </p>

        <div className={styles.chipRow}>
          <p className={styles.chip}>Fragrance</p>
          <p className={styles.chip}>Baby Care &amp; Nutrition</p>
          <p className={styles.chip}>Hygiene / FMCG</p>
          <p className={styles.chip}>AI & Cybersecurity</p>
          <p className={styles.chip}>Distributor Ready</p>
        </div>
      </section>

      <ul className={styles.brandList}>
        {divisionCatalog.map((division) => {
          const divisionPageHref = DIVISION_PAGE_ROUTES[division.id] ?? division.href;
          const divisionWebsiteHref = DIVISION_WEBSITE_ROUTES[division.id];
          const isTech = division.theme === 'tech';
          const ctaLabel = division.ctaLabel ?? (divisionWebsiteHref ? 'Visit Website' : 'Open Division');
          const cardClass = isTech ? `${styles.brandVisualCard} ${styles.brandVisualCardTech}` : styles.brandVisualCard;
          const categoryClass = isTech
            ? `${styles.brandVisualCategory} ${styles.brandVisualCategoryTech}`
            : styles.brandVisualCategory;
          const actionClass = isTech
            ? `${styles.brandVisualAction} ${styles.brandVisualActionTech}`
            : styles.brandVisualAction;
          const titleClass = isTech
            ? `${styles.brandItemTitle} ${styles.brandItemTitleTech}`
            : styles.brandItemTitle;
          const focusClass = isTech
            ? `${styles.brandVisualFocus} ${styles.brandVisualFocusTech}`
            : styles.brandVisualFocus;
          const descriptionClass = styles.brandItemText;

          return (
            <li key={division.id}>
              <article className={cardClass}>
                <Link
                  href={divisionPageHref}
                  className={styles.brandVisualMediaLink}
                  aria-label={`Open ${division.name} division page`}
                >
                  <div className={styles.brandVisualMedia}>
                    <Image
                      src={division.image}
                      alt={division.imageAlt}
                      fill
                      className={styles.brandVisualImage}
                      sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                    />
                    <div className={styles.brandVisualOverlay} />
                    <p className={categoryClass}>{division.category}</p>
                  </div>
                </Link>

                <div className={styles.brandVisualBody}>
                  <h3 className={titleClass}>{division.name}</h3>
                  <p className={focusClass}>
                    {isTech ? 'Technology Division' : 'Consumer Division'}
                  </p>
                  <p className={descriptionClass}>{division.description}</p>

                  {divisionWebsiteHref ? (
                    <a
                      href={divisionWebsiteHref}
                      target="_self"
                      rel="noopener noreferrer"
                      className={actionClass}
                      aria-label={`Visit ${division.name} website`}
                    >
                      {ctaLabel}
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      href={divisionPageHref}
                      className={actionClass}
                      aria-label={`Open ${division.name} division page`}
                    >
                      {ctaLabel}
                    </Link>
                  )}
                </div>
              </article>
            </li>
          );
        })}
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
