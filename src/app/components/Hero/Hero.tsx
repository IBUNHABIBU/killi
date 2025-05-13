// src/app/components/Hero/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';

export const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render on client to avoid hydration mismatch
  if (!isMounted) {
    return (
      <section className={styles.hero} aria-hidden="true">
        {/* Empty placeholder for server render */}
        <div className={styles.heroBackground}></div>
      </section>
    );
  }

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image
          src="/images/kilimanjarotwiga.jpg"
          alt="Adventure landscape"
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Come as a client, <span>leave as a friend</span>
        </h1>
        <p className={styles.heroText}>
          We specialize in Wildlife Safaris, Mountain Climbing, Beach Holidays, Culture Tourism and Day Trips.
        </p>
        <a href="#services" className={styles.heroButton}>
          Explore Our Services
        </a>
      </div>
    </section>
  );
};