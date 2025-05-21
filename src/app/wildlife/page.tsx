import React from 'react';
import WildLifeSafari from '../components/WildLifeSafari/WildLifeSafari';
import styles from './wildlife.module.scss';

const Page = () => {
  return (
    <main className={styles.wildlifePage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <h1>Tanzanian Wildlife Safaris</h1>
          <p className={styles.subtitle}>
            Journey through the Serengeti and beyond with expert Maasai guides
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.contentWrapper}>
        <WildLifeSafari />
      </div>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Ready for Your Adventure?</h2>
        <p>Book your custom safari package today</p>
        <button className={styles.ctaButton}>
          Contact Our Safari Experts
        </button>
      </section>
    </main>
  );
};

export default Page;