// src/app/components/SpecialOffers/SpecialOffers.tsx
'use client';

import Image from 'next/image';
import styles from './SpecialOffers.module.scss';

const specialOffers = [
  {
    id: 1,
    title: 'Wildlife safari',
    description: '3-day luxury camping safari with guided game drives',
    price: '20%',
    originalPrice: 'OFF',
    image: '/images/jioni.jpg',
    expiry: 'happy to save you a spot'
  },
  {
    id: 2,
    title: 'Zanzibar Beach Escape',
    description: '5-day all-inclusive beach resort package',
    price: '20%',
    originalPrice: 'OFF',
    image: '/images/uhurupeak.jpg',
    expiry: "now's a great time"
  },
  {
    id: 3,
    title: 'Kilimanjaro Last-Minute',
    description: '7-day Machame route climb with expert guides',
    price: '20%',
    originalPrice: 'OFF',
    image: '/images/klimanjaro.jpg',
    expiry: 'would love to have you join!'
  }
];

export const SpecialOffers = () => {
  return (
    <section className={styles.specialOffers} id="special-offers">
      <div className={styles.header}>
        <h2 className={styles.title}>Special Deals & Last Minute Offers</h2>
        <p className={styles.subtitle}>
          Book a unique tour at a great price! Grab a last-minute offer and start packing for your memorable vacation.
        </p>
      </div>

      <div className={styles.offersGrid}>
        {specialOffers.map((offer) => (
          <div key={offer.id} className={styles.offerCard}>
            <div className={styles.imageContainer}>
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.badge}>{offer.expiry}</div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.offerTitle}>{offer.title}</h3>
              <p className={styles.offerDescription}>{offer.description}</p>
              <div className={styles.pricing}>
                <span className={styles.currentPrice}>{offer.price}</span>
                <span className={styles.originalPrice}>{offer.originalPrice}</span>
              </div>
              <a href='/contact' className={styles.bookButton}>Book Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};