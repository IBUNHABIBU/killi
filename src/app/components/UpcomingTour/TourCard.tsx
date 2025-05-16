import styled from 'styled-components';
import { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
  className?: string;
}

const TourCard: React.FC<TourCardProps> = ({ tour, className }) => {
  return (
    <article className={`${className} tour-card`}>
      <div className="tour-card__image-container">
        <img 
          src={tour.imageUrl} 
          alt={tour.title} 
          className="tour-card__image"
        />
        <span className="tour-card__difficulty">{tour.difficulty}</span>
      </div>
      
      <div className="tour-card__content">
        <h3 className="tour-card__title">{tour.title}</h3>
        <p className="tour-card__duration">{tour.duration}</p>
        <p className="tour-card__description">{tour.description}</p>
        
        <ul className="tour-card__highlights">
          {tour.highlights.slice(0, 3).map((highlight, index) => (
            <li key={index} className="tour-card__highlight">
              {highlight}
            </li>
          ))}
        </ul>
        
        <div className="tour-card__footer">
          <span className="tour-card__price">From ${tour.price}</span>
          <button className="tour-card__button">View Details</button>
        </div>
      </div>
    </article>
  );
};

export default styled(TourCard);