// app/components/Footer/Footer.tsx
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTripadvisor } from 'react-icons/fa';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* About Section */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>About Killihappy</h3>
          <p className={styles.footerText}>
            We specialize in creating unforgettable safari experiences in Tanzania, 
            offering wildlife adventures, mountain climbing, and cultural tours.
          </p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/profile.php?id=61554214025733" aria-label="Facebook" target='_blank'>
              <FaFacebookF />
            </a>
            {/* <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </a> */}
            <a href="https://www.instagram.com/kilihappy_tanzania_adventures/" aria-label="Instagram" target='_blank'>
              <FaInstagram />
            </a>
            {/* <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a> */}
            <a href="https://tripadvisor.com" aria-label="TripAdvisor">
              <FaTripadvisor />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            {/* <li>
              <Link href="/tours">Safari Tours</Link>
            </li> */}
            {/* <li>
              <Link href="/destinations">Destinations</Link>
            </li>
            <li>
              <Link href="/blog">Travel Blog</Link>
            </li> */}
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Contact Us</h3>
          <address className={styles.contactInfo}>
            <p>2560 Olasiti Street</p>
            <p>Arusha, Tanzania</p>
            <p>
              <a href="tel:+255123456789">+255 658 571 653</a>
            </p>
            <p>
              <a href="mailto:info@killihappyadventures.com">kilihappytanzaniaadventure@gmail.com</a>
            </p>
          </address>
        </div>

        {/* Newsletter */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Newsletter</h3>
          <p className={styles.footerText}>
            Subscribe for safari deals and travel tips
          </p>
          <form className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required 
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Killihappy Adventures. All rights reserved.</p>
        <div className={styles.legalLinks}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/cookies">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}