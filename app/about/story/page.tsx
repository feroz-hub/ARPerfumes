import type { Metadata } from 'next';
import Link from 'next/link';
import CorporateStory, { metadata as corporateStoryMetadata } from '../CorporateStory';
import styles from '../../corporate.module.css';

export const metadata: Metadata = corporateStoryMetadata;

export default function CorporateStoryPage() {
  return (
    <main className={styles.page}>
      <CorporateStory />

      <div className={styles.actionRow}>
        <Link href="/about" className={styles.inlineAction}>
          Back to About
        </Link>
        <Link href="/contact" className={styles.inlineAction}>
          Contact Us
        </Link>
      </div>
    </main>
  );
}
