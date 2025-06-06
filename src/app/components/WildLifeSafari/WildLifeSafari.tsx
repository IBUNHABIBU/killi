import { wildlife } from '@/app/data/tour';
import styles from '../UpcomingTours/UpcomingTours.module.scss';
import TourCard from '../UpcomingTours/TourCard';

const WildLifeSafari = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {wildlife.map((tour) => (
          <TourCard 
            key={tour.id}
            tour={tour}
            className={tour.id === 'marangu-route' ? styles.featuredCard : ''}
            slagpath='wisafari'
          />
        ))}
      </div>
    </section>
  );
};

export default WildLifeSafari;