import Link from 'next/link';
import styles from './femison.module.css';

type FemisonHeroProps = {
  whatsappUrl: string;
  contactPerson: string;
};

export default function FemisonHero({ whatsappUrl, contactPerson }: Readonly<FemisonHeroProps>) {
  return (
    <section className={styles.hero}>
      <p className={styles.heroBadge}>Gripe Water Product Brand</p>
      <h2 className={styles.heroTitle}>Femison</h2>
      <p className={styles.heroLead}>
        Baby care-focused product development centered on caregiver confidence, safety-first quality controls, and
        trusted channel delivery.
      </p>

      <div className={styles.heroChipRow}>
        <p className={styles.heroChip}>Infant Wellness</p>
        <p className={styles.heroChip}>Caregiver Trust</p>
        <p className={styles.heroChip}>Pharmacy Channel Fit</p>
      </div>

      <p className={styles.heroContactHint}>Primary contact person: {contactPerson}</p>

      <div className={styles.heroActionRow}>
        <Link href="/business-with-us" className={styles.heroPrimary}>
          Medical / Distributor Inquiry
        </Link>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.heroSecondary}>
          WhatsApp Brand Contact
        </a>
      </div>
    </section>
  );
}
