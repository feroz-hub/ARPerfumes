import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { corporateVisuals } from '@/app/lib/brandVisuals';
import styles from '../corporate.module.css';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Learn the corporate history and legacy of Firose Enterprises, a global manufacturing and distribution group since 1980.',
};

const storyMilestones = [
  {
    year: '1980',
    title: 'Foundation',
    text: 'Firose Enterprises began as a focused entrepreneurial venture driven by integrity and disciplined execution.',
  },
  {
    year: '1990s - 2000s',
    title: 'Category Expansion',
    text: 'Manufacturing capability and market understanding expanded across fragrance, hygiene, and healthcare segments.',
  },
  {
    year: 'Today',
    title: 'Integrated Brand Platform',
    text: 'FIROSE now operates a multi-brand portfolio with in-house quality control and scalable distribution readiness.',
  },
];

export default function CorporateStory() {
  return (
    <section className={`${styles.section} ${styles.storySection}`}>
      <div className={styles.storyHeroBlock}>
        <div className={styles.storyHeroMedia}>
          <Image
            src={corporateVisuals.storyHeroImage}
            alt="Firose enterprise legacy and growth"
            fill
            className={styles.storyHeroImage}
            sizes="(max-width: 899px) 100vw, 50vw"
            priority
          />
          <div className={styles.storyHeroOverlay} />
          <p className={styles.storyHeroCaption}>Legacy of trust, built since 1980</p>
        </div>

        <header className={styles.storyHeroContent}>
          <p className={styles.eyebrow}>Legacy</p>
          <h1 className={styles.storyTitle}>Our Story</h1>
          <p className={styles.storyHeroLead}>
            From a small entrepreneurial start in 1980 to a trusted multi-brand group, FIROSE has grown through
            quality-first decisions and long-term market trust.
          </p>
          <div className={styles.storyHeroChips}>
            <p className={styles.storyHeroChip}>Since 1980</p>
            <p className={styles.storyHeroChip}>In-house Manufacturing</p>
            <p className={styles.storyHeroChip}>Quality-First Growth</p>
          </div>
        </header>
      </div>

      <div className={styles.storyTimeline}>
        {storyMilestones.map((milestone) => (
          <article key={milestone.year} className={styles.storyTimelineCard}>
            <p className={styles.storyTimelineYear}>{milestone.year}</p>
            <h2 className={styles.storyTimelineTitle}>{milestone.title}</h2>
            <p>{milestone.text}</p>
          </article>
        ))}
      </div>

      <div className={styles.storyNarrativeGrid}>
        <article className={styles.storyNarrativeCard}>
          <h2 className={styles.sectionTitle}>From Humble Beginnings to Global Reach</h2>
          <p>
            <strong>Firose Enterprises</strong> began its journey in <strong>1980</strong>, built from the ground up as a
            small entrepreneurial venture driven by commitment, integrity, and long-term vision.
          </p>
          <p>
            What started as a modest operation has steadily evolved into a trusted manufacturing and distribution
            enterprise, serving diverse consumer segments across fragrance, hygiene, and healthcare.
          </p>
          <p>
            Over decades of consistent growth, Firose Enterprises has remained rooted in one unwavering principle:{' '}
            <em>quality must never be compromised for cost</em>.
          </p>
        </article>

        <article className={styles.storyNarrativeCard}>
          <h2 className={styles.sectionTitle}>Manufacturing with Purpose</h2>
          <p>
            Firose Enterprises is not just a brand owner, it is a manufacturer at its core. Every product reflects
            strict quality benchmarks, careful sourcing, and process discipline developed over decades of experience.
          </p>
          <p>
            The company prioritizes product safety, regulatory compliance, and long-term consumer trust over short-term
            price competition.
          </p>
          <p>All operations are fully registered under FSSAI, MSME, and GST.</p>
        </article>
      </div>

      <div className={styles.storyMediaGrid}>
        <article className={styles.storyMediaCard}>
          <div className={styles.storyMediaImageWrap}>
            <Image
              src={corporateVisuals.storyOperationsImage}
              alt="Firose operations and process discipline"
              fill
              className={styles.storyMediaImage}
              sizes="(max-width: 899px) 100vw, 50vw"
            />
          </div>
          <div className={styles.storyMediaContent}>
            <h2 className={styles.sectionTitle}>Built on Quality, Driven by Trust</h2>
            <p>
              In markets where cost often dictates decisions, FIROSE chooses quality, reliability, and long-term brand
              longevity.
            </p>
          </div>
        </article>

        <article className={styles.storyMediaCard}>
          <div className={styles.storyMediaImageWrap}>
            <Image
              src={corporateVisuals.storyQualityImage}
              alt="Firose quality and safety standards"
              fill
              className={styles.storyMediaImage}
              sizes="(max-width: 899px) 100vw, 50vw"
            />
          </div>
          <div className={styles.storyMediaContent}>
            <h2 className={styles.sectionTitle}>Looking Ahead</h2>
            <p>
              With a strong manufacturing foundation and a growing portfolio of consumer brands, FIROSE continues to
              expand with a future-ready mindset while staying grounded in core values.
            </p>
          </div>
        </article>
      </div>

      <div className={styles.storyContent}>
        <p>
          From a small business in 1980 to a globally delivering enterprise today, Firose Enterprises stands as a
          testament to disciplined growth, quality-first thinking, and enduring trust.
        </p>
      </div>

      <div className={styles.storyLinkRow}>
        <a
          href="https://www.indiamart.com/firose-enterpriseschennai/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.primaryAction}
        >
          Visit Our IndiaMART Profile
        </a>
        <Link href="/contact" className={styles.inlineAction}>
          Contact Corporate Team
        </Link>
      </div>
    </section>
  );
}
