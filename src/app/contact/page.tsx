// app/contact/page.tsx
import ContactForm from '@/app/components/ContactForm/ContactForm';
import ContactInfo from '@/app/components/ContactInfo/ContactInfo';
import MapEmbed from '@/app/components/MapEmbed/MapEmbed';
import styles from './contact.module.scss';

export const metadata = {
  title: 'Contact Us | Killihappy Adventures',
  description: 'Get in touch for safari bookings and inquiries',
};

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <section className={styles.hero}>
        <h1>Contact Our Safari Experts</h1>
        <p>We&apos;re here to help you plan your perfect Tanzanian adventure</p>
      </section>

      <div className={styles.contactContainer}>
        <ContactForm />
        <ContactInfo />
      </div>

      <section className={styles.mapSection}>
        <h2>Our Location</h2>
        <MapEmbed />
      </section>
    </div>
  );
}