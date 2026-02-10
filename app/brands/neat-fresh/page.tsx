import type { Metadata } from 'next';
import Link from 'next/link';
import {
  buildBrandMailToUrl,
  buildBrandWhatsAppUrl,
  getBrandBySlug,
} from '@/app/lib/brands';
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

export const metadata: Metadata = {
  title: 'Neat & Fresh',
  description:
    'Neat & Fresh is the housekeeping products brand under FiroseEnterprises, serving home, office, and commercial hygiene segments.',
};

export default function NeatFresh() {
  return (
    <main className={`${styles.brandPage} ${brandStyles.brandPageTheme}`}>
      <p className={`${styles.metaTag} ${brandStyles.brandMeta}`}>Housekeeping Product Brand</p>

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
