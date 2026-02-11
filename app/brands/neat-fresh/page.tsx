import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  buildBrandMailToUrl,
  buildBrandWhatsAppUrl,
  getBrandBySlug,
} from '@/app/lib/brands';
import { brandVisuals } from '@/app/lib/brandVisuals';
import NeatFreshContactCard from './components/NeatFreshContactCard';
import NeatFreshCtaBlocks from './components/NeatFreshCtaBlocks';
import NeatFreshHero from './components/NeatFreshHero';
import NeatFreshProductSections from './components/NeatFreshProductSections';
import brandStyles from './components/neatFresh.module.css';
import styles from '../brands.module.css';

const neatFreshBrand = getBrandBySlug('neat-fresh');
const neatFreshContact = neatFreshBrand.contact;

const neatFreshWhatsAppUrl = buildBrandWhatsAppUrl(
  neatFreshContact,
  'Hello, I would like to discuss Neat & Fresh distribution and product options.'
);
const neatFreshMailToUrl = buildBrandMailToUrl(
  neatFreshContact,
  'Neat & Fresh Enquiry',
  'Hello, I would like to discuss Neat & Fresh products and distribution opportunities.'
);
const neatFreshVisual = brandVisuals['neat-fresh'];

export const metadata: Metadata = {
  title: 'Neat & Fresh',
  description:
    'Neat & Fresh is the housekeeping products brand under Firose Enterprises, serving home, office, and commercial hygiene segments.',
};

export default function NeatFresh() {
  return (
    <main className={`${styles.brandPage} ${brandStyles.brandPageTheme}`}>
      <p className={`${styles.metaTag} ${brandStyles.brandMeta}`}>Housekeeping Product Brand</p>

      <section className={styles.brandSpotlight}>
        <div className={styles.brandSpotlightMedia}>
          <Image
            src={neatFreshVisual.heroImage}
            alt={neatFreshVisual.alt}
            fill
            className={styles.brandSpotlightImage}
            sizes="(max-width: 899px) 100vw, 50vw"
            priority
          />
        </div>

        <div className={styles.brandSpotlightContent}>
          <p className={`${styles.brandSpotlightBadge} ${brandStyles.brandMeta}`}>{neatFreshVisual.focus}</p>
          <h2 className={`${styles.brandSpotlightTitle} ${brandStyles.heroTitle}`}>Neat &amp; Fresh</h2>
          <p className={styles.brandSpotlightText}>
            Neat &amp; Fresh is designed for practical hygiene performance across home, office, and institutional
            environments.
          </p>
          <div className={styles.brandSpotlightChips}>
            <p className={`${styles.brandSpotlightChip} ${brandStyles.brandMeta}`}>Surface Care</p>
            <p className={`${styles.brandSpotlightChip} ${brandStyles.brandMeta}`}>Disinfection</p>
            <p className={`${styles.brandSpotlightChip} ${brandStyles.brandMeta}`}>Bulk Supply Ready</p>
          </div>
        </div>
      </section>

      <div className={styles.actionRow}>
        <Link href="/brands" className={styles.backLink}>
          Back to All Brands
        </Link>
        <Link href="/business-with-us" className={`${styles.inlineBrandAction} ${brandStyles.brandAction}`}>
          Become a Distributor
        </Link>
      </div>

      <NeatFreshHero whatsappUrl={neatFreshWhatsAppUrl} contactPerson={neatFreshContact.personName} />
      <NeatFreshProductSections />
      <NeatFreshContactCard
        contact={neatFreshContact}
        whatsappUrl={neatFreshWhatsAppUrl}
        mailtoUrl={neatFreshMailToUrl}
      />
      <NeatFreshCtaBlocks whatsappUrl={neatFreshWhatsAppUrl} mailtoUrl={neatFreshMailToUrl} />
    </main>
  );
}
