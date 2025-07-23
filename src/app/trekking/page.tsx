import React from 'react';
import UpcomingTours from '../components/UpcomingTours/UpcomingTours';
import styles from './trekking.module.scss';

const Page = () => {
  return (
    <main className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Discover <span>Tanzania&apos;s</span> Wonders
          </h1>
          <p className={styles.heroSubtitle}>
            Authentic adventures with Kiboma Tours 
          </p>
        </div>
      </section>

      {/* Upcoming Tours Section */}
      <section className={styles.toursSection}>
        <UpcomingTours />
      </section>
    </main>
  );
};

export default Page;