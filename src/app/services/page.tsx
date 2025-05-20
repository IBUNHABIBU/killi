import React from 'react';
// import UpcomingTours from '../components/UpcomingTours/UpcomingTours';
import Services from '../components/CompanyServices/CompanyServices';
import styles from './services.module.scss';

const Page = () => {
  return (
    <div className={styles.servicesPage}>
      <div className={styles.heroHeader}>
        <h1 className={styles.mainTitle}>
          <span className={styles.titleLine}>Our</span>
          <span className={styles.titleHighlight}>Tanzanian</span>
          <span className={styles.titleLine}>Services</span>
        </h1>
        <p className={styles.subtitle}>
          Authentic experiences crafted with Maasai wisdom and modern comfort
        </p>
      </div>
      
      <div className={styles.contentWrapper}>
        <Services />
      </div>
    </div>
  );
};

export default Page;