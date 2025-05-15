// src/app/components/DiscoverSection/DiscoverSection.tsx
'use client';

import Image from 'next/image';
import styles from './DiscoverSection.module.scss';
import useScrollToSection from '../utils/ScrollToSection';

export const DiscoverSection = () => {
  const scrollToSpecialOffers = useScrollToSection('special-offers');
  return (
    <section className={styles.discoverSection}>
      <div className={styles.container}>
        {/* Left Content (Black Background) */}
        <div className={styles.content}>
          <h2 className={styles.title}>Discover Unlimited Beauty</h2>
          <p className={styles.description}>
            Meet different people, cultures, traditions and landscapes. Choose your next destination with us, we will take care of the rest.
          </p>
          <button className={styles.button} onClick={scrollToSpecialOffers}>
            Explore Destinations
          </button>
        </div>

        {/* Right Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/images/culturemeeting.jpg"
            alt="Beautiful landscape destination"
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};