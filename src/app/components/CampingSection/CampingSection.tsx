// src/app/components/CampingSection/CampingSection.tsx
'use client';

import Image from 'next/image';
import styles from './CampingSection.module.scss';

export const CampingSection = () => {
  return (
    <section className={styles.campingSection}>
      <div className={styles.container}>
        {/* Left Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/images/camping-package.jpg"
            alt="Tanzania camping safari experience"
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right Content */}
        <div className={styles.content}>
          <h2 className={styles.title}>Camping Safari Package</h2>
          <p className={styles.subtitle}>4 Days Best Tanzania Camping Safari</p>
          <p className={styles.description}>
            Experience the wild beauty of Tanzania with our authentic camping safari. 
            Sleep under the stars, witness breathtaking wildlife, and create 
            unforgettable memories in the heart of Africa.
          </p>
          <a href="#offers" className={styles.button}>
            Explore Our Offers
          </a>
        </div>
      </div>
    </section>
  );
};