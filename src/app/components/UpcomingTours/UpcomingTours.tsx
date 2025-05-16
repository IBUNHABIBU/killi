import React from 'react';
import styles from './UpcomingTours.module.scss';
import { Tour } from '../../types/tour';
import TourCard from '../TourCard/TourCard';

interface UpcomingToursProps {
  tours: Tour[];
}

const UpcomingTours: React.FC<UpcomingToursProps> = ({ tours }) => {
  return (
    <section className={styles.upcomingTours}>
      <div className={styles.upcomingTours__header}>
        <h2 className={styles.upcomingTours__title}>Upcoming Adventure Tours</h2>
        <p className={styles.upcomingTours__subtitle}>
          Discover our carefully curated selection of unforgettable experiences
        </p>
      </div>

      <div className={styles.upcomingTours__grid}>
        {tours.map((tour) => (
          <TourCard 
            key={tour.id} 
            tour={tour} 
            className={`${styles.upcomingTours__card} ${tour.featured ? styles['upcomingTours__card--featured'] : ''}`}
          />
        ))}
      </div>

      <div className={styles.upcomingTours__cta}>
        <button className={styles.upcomingTours__button}>View All Tours</button>
      </div>
    </section>
  );
};

export default UpcomingTours;