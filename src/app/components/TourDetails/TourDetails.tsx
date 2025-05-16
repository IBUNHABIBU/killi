import { Tour } from '@/app/data/tour';
import styles from './TourDetails.module.scss';

interface TourDetailsProps {
  tour: Tour;
}

const TourDetails = ({ tour }: TourDetailsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.hero} style={{ backgroundImage: `url(${tour.image})` }}>
        <h1>{tour.title}</h1>
        <p>{tour.duration} • {tour.difficulty}</p>
      </div>

      <div className={styles.content}>
        <section className={styles.overview}>
          <h2>Overview</h2>
          <p>{tour.description}</p>
        </section>

        <section className={styles.itinerary}>
          <h2>Itinerary</h2>
          {tour.itinerary.map((day) => (
            <div key={day.day} className={styles.day}>
              <h3>Day {day.day}: {day.title}</h3>
              <p>{day.content}</p>
            </div>
          ))}
        </section>

        <section className={styles.highlights}>
          <h2>Highlights</h2>
          <ul>
            {tour.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TourDetails;