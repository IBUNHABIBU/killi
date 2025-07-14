// src/app/components/ToursSection/ToursSection.tsx
'use client';

import Image from 'next/image';
import styles from './TourSection.module.scss';
import useScrollToSection from '../utils/ScrollToSection';

export const ToursSection = () => {
  const scrollToSpecialOffers = useScrollToSection('special-offers');
  const tourImages = [
    {
      src: '/images/nyumbu.jpg',
      alt: 'Exotic beach destination'
    },
    {
      src: '/images/uhurupeak.jpg',
      alt: 'Mountain ski resort'
    },
    {
      src: '/images/nationalpark.jpg',
      alt: 'Cultural city tour'
    },
    {
      src: '/images/serengeti.jpg',
      alt: 'Wildlife safari experience'
    }
  ];

  return (
    <section className={styles.toursSection}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <h2 className={styles.title}>Discover Tanzania&apos;s Natural Wonders</h2>
          <p className={styles.description}>
            Where Every Journey Becomes a Story
          </p>
          <p className={styles.description}>
            Stand at the gates of the legendary Serengeti. Conquer the summit of Mount Kilimanjaro. Witness zebras roaming wild and free. At Kiboma tours, we take you beyond the ordinary—into the heart of Tanzania&apos;s breathtaking landscapes and unforgettable wildlife experiences.
          </p>
          <button className={styles.button} onClick={scrollToSpecialOffers}>
            Explore Our Offers
          </button>
        </div>

        {/* Right Image Grid */}
        <div className={styles.imageGrid}>
          {tourImages.map((image, index) => (
            <div key={index} className={styles.gridItem}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className={styles.overlay}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};