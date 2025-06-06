import { upcomingTours } from '@/app/data/tour';
import styles from './UpcomingTours.module.scss';
import TourCard from './TourCard';

const UpcomingTours = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {upcomingTours.map((tour) => (
          <TourCard 
            key={tour.id}
            tour={tour}
            className={tour.id === 'marangu-route' ? styles.featuredCard : ''}
            slagpath='tours'
          />
        ))}
      </div>
    </section>
  );
};

export default UpcomingTours;