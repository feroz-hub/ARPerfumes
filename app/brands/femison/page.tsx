import type { Metadata } from 'next';
import Link from 'next/link';
import {
  buildBrandMailToUrl,
  buildBrandWhatsAppUrl,
  getBrandBySlug,
} from '@/app/lib/brands';
import FemisonContactCard from './components/FemisonContactCard';
import FemisonCtaBlocks from './components/FemisonCtaBlocks';
import FemisonHero from './components/FemisonHero';
import FemisonProductSections from './components/FemisonProductSections';
import brandStyles from './components/femison.module.css';
import styles from '../brands.module.css';

const femisonBrand = getBrandBySlug('femison');
const femisonContact = femisonBrand.contact;

const femisonWhatsAppUrl = buildBrandWhatsAppUrl(
  femisonContact,
  'Hello, I would like to discuss Femison product and medical distribution opportunities.'
);
const femisonMailToUrl = buildBrandMailToUrl(
  femisonContact,
  'Femison Enquiry',
  'Hello, I would like to discuss Femison product information and channel opportunities.'
);

export const metadata: Metadata = {
  title: 'Femison',
  description:
    'Femison is the gripe water and baby care-focused brand under Firose Enterprises, built on safety and caregiver trust.',
};

export default function Femison() {
  return (
    <main className={`${styles.brandPage} ${brandStyles.brandPageTheme}`}>
      <p className={`${styles.metaTag} ${brandStyles.brandMeta}`}>Gripe Water Product Brand</p>

      <div className={styles.actionRow}>
        <Link href="/brands" className={styles.backLink}>
          Back to All Brands
        </Link>
        <Link href="/business-with-us" className={`${styles.inlineBrandAction} ${brandStyles.brandAction}`}>
          Inquiry
        </Link>
      </div>

      <FemisonHero whatsappUrl={femisonWhatsAppUrl} contactPerson={femisonContact.personName} />
      <FemisonProductSections />
      <FemisonContactCard contact={femisonContact} whatsappUrl={femisonWhatsAppUrl} mailtoUrl={femisonMailToUrl} />
      <FemisonCtaBlocks whatsappUrl={femisonWhatsAppUrl} mailtoUrl={femisonMailToUrl} />
    </main>
  );
}
