import Link from 'next/link';
import styles from './UpcomingTours.module.scss';
import { Tour } from '@/app/data/tour';

interface TourCardProps {
  tour: Tour;
  className?: string;
  slagpath: string;
}

const TourCard = ({ tour, className, slagpath}: TourCardProps) => {
  return (
    <article className={`${styles.card} ${className || ''}`}>
      <div 
        className={styles.image}
        style={{ backgroundImage: `url(${tour.image})` }}
      />
      
      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{tour.title}</h3>
        <p className={styles.meta}>{tour.duration} • {tour.difficulty}</p>
        
        <ul className={styles.highlights}>
          {tour.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <Link 
          href={`/${slagpath}/${tour.slug}`}
          className={styles.cta}
        >
          View Details →
        </Link>
      </div>
    </article>
  );
};

export default TourCard;