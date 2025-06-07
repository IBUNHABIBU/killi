// src/app/components/TestimonialSection/TestimonialSection.tsx
'use client';

import Image from 'next/image';
import styles from './TestimonialSection.module.scss';

export const TestimonialSection = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        {/* Left Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/images/serengeti.jpg"
            alt="Happy couple on safari"
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right Content */}
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>What People Say</h2>
          <blockquote className={styles.testimonial}>
            <p className={styles.quote}>
              &quot;We booked our honeymoon with Kilihappy Adventures Tanzania and it was simply incredible. 
              They took care of everything, even our packing list!&quot;
            </p>
            <cite className={styles.author}>John Qin & Grace Tao </cite>
          </blockquote>
        </div>
      </div>

      
    </section>
  );
};