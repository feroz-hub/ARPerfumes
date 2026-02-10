import Link from 'next/link';
import styles from './neatFresh.module.css';

type NeatFreshHeroProps = {
  whatsappUrl: string;
  contactPerson: string;
};

export default function NeatFreshHero({ whatsappUrl, contactPerson }: Readonly<NeatFreshHeroProps>) {
  return (
    <section className={styles.hero}>
      <p className={styles.heroBadge}>Housekeeping Product Brand</p>
      <h2 className={styles.heroTitle}>Neat &amp; Fresh</h2>
      <p className={styles.heroLead}>
        Hygiene-focused cleaning solutions engineered for dependable routine use across home, office, and commercial
        environments.
      </p>

      <div className={styles.heroChipRow}>
        <p className={styles.heroChip}>Surface Care</p>
        <p className={styles.heroChip}>Disinfection</p>
        <p className={styles.heroChip}>Commercial Hygiene</p>
      </div>

      <p className={styles.heroContactHint}>Primary contact person: {contactPerson}</p>

      <div className={styles.heroActionRow}>
        <Link href="/business-with-us" className={styles.heroPrimary}>
          Become a Distributor
        </Link>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.heroSecondary}>
          WhatsApp Brand Contact
        </a>
      </div>
    </section>
  );
}
