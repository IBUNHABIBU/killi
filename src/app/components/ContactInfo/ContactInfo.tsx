// app/components/ContactInfo.tsx
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import styles from './ContactInfo.module.scss';

export default function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
      <h2>Contact Information</h2>
      
      <div className={styles.infoItem}>
        <FaMapMarkerAlt className={styles.icon} />
        <div>
          <h3>Address</h3>
          <p>2560 Olasiti Street, Arusha, Tanzania</p>
        </div>
      </div>

      <div className={styles.infoItem}>
        <FaPhone className={styles.icon} />
        <div>
          <h3>Phone</h3>
          <p>+255 658 571 653</p>
        </div>
      </div>

      <div className={styles.infoItem}>
        <FaEnvelope className={styles.icon} />
        <div>
          <h3>Email</h3>
          <p>kilihappytanzaniaadventure@gmail.com</p>
        </div>
      </div>

      <div className={styles.infoItem}>
        <FaClock className={styles.icon} />
        <div>
          <h3>Office Hours</h3>
          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 2:00 PM</p>
        </div>
      </div>
    </div>
  );
}