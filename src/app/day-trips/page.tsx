import React from 'react';
import Link from 'next/link';
import styles from './daytrips.module.scss';
import { dayTrips } from '../data/tour';


const Page = () => {

  return (
    <main className={styles.dayTripsPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Tanzania Day Trips</h1>
          <p>Experience the best of Northern Tanzania in a single day</p>
        </div>
      </section>

      {/* Day Trips Grid */}
      <section className={styles.tripsGrid}>
        <div className={styles.sectionHeader}>
          <h2>Our Popular Day Excursions</h2>
          <p>Perfect for travelers with limited time</p>
        </div>

        <div className={styles.grid}>
          {dayTrips.map((trip) => (
            <div key={trip.id} className={styles.tripCard}>
              <div className={styles.imageContainer}>
                <img
                  src={trip.image} 
                  alt={trip.title}
                  className={styles.tripImage}
                />
                <div className={styles.durationBadge}>
                  <span>{trip.duration}</span>
                </div>
              </div>
              
              <div className={styles.tripContent}>
                <h3>{trip.title}</h3>
                <ul>
                  {trip.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                <Link 
                  href={`/trips/${trip.slug}`}
                  className={styles.bookButton}
                >
                  See details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Trip CTA */}
      <section className={styles.customTrip}>
        <h2>Don&apos;t See Your Perfect Trip?</h2>
        <p>We customize private day excursions</p>
        <Link href="/contact" className={styles.ctaButton}>
          Request Custom Itinerary
        </Link>
      </section>
    </main>
  );
};

export default Page;