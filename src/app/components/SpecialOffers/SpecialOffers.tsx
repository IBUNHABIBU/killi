// src/app/components/SpecialOffers/SpecialOffers.tsx
'use client';

import Image from 'next/image';
import styles from './SpecialOffers.module.scss';

const specialOffers = [
  {
    id: 1,
    title: 'Serengeti Safari Special',
    description: '3-day luxury camping safari with guided game drives',
    price: '$899',
    originalPrice: '$1299',
    image: '/images/jioni.jpg',
    expiry: 'Offer ends in 3 days'
  },
  {
    id: 2,
    title: 'Zanzibar Beach Escape',
    description: '5-day all-inclusive beach resort package',
    price: '$749',
    originalPrice: '$1099',
    image: '/images/uhurupeak.jpg',
    expiry: 'Limited availability'
  },
  {
    id: 3,
    title: 'Kilimanjaro Last-Minute',
    description: '7-day Machame route climb with expert guides',
    price: '$1599',
    originalPrice: '$1999',
    image: '/images/klimanjaro.jpg',
    expiry: 'Only 2 spots left'
  }
];

export const SpecialOffers = () => {
  return (
    <section className={styles.specialOffers}>
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
              <button className={styles.bookButton}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};