import React from 'react';
import styles from './TourCard.module.scss';
import { Tour } from '../../types/tour';

interface TourCardProps {
  tour: Tour;
  className?: string;
}

const TourCard: React.FC<TourCardProps> = ({ tour, className }) => {
  return (
    <article className={`${styles.tourCard} ${className || ''}`}>
      <div className={styles.tourCard__imageContainer}>
        <img 
          src={tour.imageUrl} 
          alt={tour.title} 
          className={styles.tourCard__image}
        />
        <span className={`${styles.tourCard__difficulty} ${styles[`tourCard__difficulty--${tour.difficulty.toLowerCase()}`]}`}>
          {tour.difficulty}
        </span>
      </div>
      
      <div className={styles.tourCard__content}>
        <h3 className={styles.tourCard__title}>{tour.title}</h3>
        <p className={styles.tourCard__duration}>{tour.duration}</p>
        <p className={styles.tourCard__description}>{tour.shortDescription}</p>
        
        <ul className={styles.tourCard__highlights}>
          {tour.highlights.slice(0, 3).map((highlight, index) => (
            <li key={index} className={styles.tourCard__highlight}>
              {highlight}
            </li>
          ))}
        </ul>
        
        <div className={styles.tourCard__footer}>
          <span className={styles.tourCard__price}>From ${tour.price.toLocaleString()}</span>
          <button className={styles.tourCard__button}>View Details</button>
        </div>
      </div>
    </article>
  );
};

export default TourCard;