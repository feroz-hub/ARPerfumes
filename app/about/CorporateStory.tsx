import type { Metadata } from 'next';
import styles from '../corporate.module.css';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Learn the corporate history and legacy of Firose Enterprises, a global manufacturing and distribution group since 1980.',
};

export default function CorporateStory() {
  return (
    <section className={`${styles.section} ${styles.storySection}`}>
      <header className={styles.sectionHeading}>
        <p className={styles.eyebrow}>Legacy</p>
        <h1 className={styles.storyTitle}>Our Story</h1>
      </header>

      <div className={styles.storyContent}>
        <p>
          <strong>Firose Enterprises</strong> began its journey in <strong>1980</strong>, built from the ground up as a
          small entrepreneurial venture driven by commitment, integrity, and long-term vision.
        </p>

        <p>
          What started as a modest operation has steadily evolved into a trusted manufacturing and distribution
          enterprise, serving diverse consumer segments across fragrance, hygiene, and healthcare. Over decades of
          consistent growth, Firose Enterprises has remained rooted in one unwavering principle:{' '}
          <em>quality must never be compromised for cost</em>.
        </p>

        <h2 className={styles.sectionTitle}>From Humble Beginnings to Global Reach</h2>
        <p>
          Founded at a time when resources were limited but ambition was not, Firose Enterprises grew through hands-on
          experience, disciplined operations, and deep market understanding. Each phase of expansion was guided by
          customer trust and product reliability rather than short-term gains.
        </p>
        <p>
          Today, Firose Enterprises manufactures and distributes all its brands in-house, operates end-to-end control
          over quality and supply, and delivers products across India and international markets.
        </p>

        <h2 className={styles.sectionTitle}>Manufacturing with Purpose</h2>
        <p>
          Firose Enterprises is not just a brand owner, it is a manufacturer at its core. Every product reflects strict
          quality benchmarks, careful sourcing, and process discipline developed over decades of industry experience.
        </p>
        <p>
          The company prioritizes product safety, regulatory compliance, and long-term consumer trust over price
          competition. All operations are fully registered under FSSAI, MSME, and GST.
        </p>

        <h2 className={styles.sectionTitle}>Built on Quality, Driven by Trust</h2>
        <p>
          In markets where cost often dictates decisions, Firose Enterprises chooses a different path, focusing on
          quality, reliability, and long-term brand longevity.
        </p>

        <h2 className={styles.sectionTitle}>Looking Ahead</h2>
        <p>
          With a strong manufacturing foundation, a growing portfolio of consumer brands, and decades of operational
          insight, Firose Enterprises continues to expand with a future-ready mindset while staying grounded in its core
          values.
        </p>

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
      </div>
    </section>
  );
}
