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
          <h2 className={styles.title}>Upcoming Tours and Destinations</h2>
          <p className={styles.description}>
            From exotic places to ski resorts, the list is almost endless and we have an offer for you.
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