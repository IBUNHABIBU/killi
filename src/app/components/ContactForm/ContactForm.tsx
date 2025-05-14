// app/components/ContactForm.tsx
'use client';

import { useState } from 'react';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    tourInterest: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <h2>Send Us a Message</h2>
      <div className={styles.formGroup}>
        <label htmlFor="name">Full Name*</label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="tourInterest">Tour Interest</label>
        <select
          id="tourInterest"
          value={formData.tourInterest}
          onChange={(e) => setFormData({...formData, tourInterest: e.target.value})}
        >
          <option value="">Select an option</option>
          <option value="safari">Wildlife Safari</option>
          <option value="kilimanjaro">Kilimanjaro Trek</option>
          <option value="zanzibar">Zanzibar Beach</option>
          <option value="cultural">Cultural Tour</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Your Message*</label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        ></textarea>
      </div>

      <button type="submit" className={styles.submitButton}>
        Send Message
      </button>
    </form>
  );
}