// src/app/about/page.tsx
'use client';

import Image from 'next/image';
import styles from './AboutPage.module.scss';

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/images/transport.jpg"
            alt="Killihappy Adventures Team"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.heroContent}>
          <h1>Our Story</h1>
          <p>Discover the passion behind Killihappy Adventures</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>Who We Are</h2>
            <p>
              Founded in 2010, Killihappy Adventures began as a small team of safari guides with a shared passion for Tanzania&apos;s 
              breathtaking landscapes and rich cultural heritage. What started as a humble operation has grown into a premier 
              adventure company, known for creating unforgettable experiences.
            </p>
            <p>
              Our name &quot;Killihappy&quot; comes from the Swahili word &quot;Kili&quot; (short for Kilimanjaro) and our mission to create 
              happiness through travel. Every journey with us is designed to connect you deeply with Tanzania&apos;s natural wonders.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/faru.jpg"
              alt="Our team on safari"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </section>

       <section className={styles.values}>
        <div className={styles.aboutContainer}>
          <h2>Our Mission</h2>
            <p>To provide our client with unforgettable travel experience, 
              with guaranteed services that surpass their expectations
              and also contribute to our suitable tourism destination.
              </p>
        </div>
      </section>
      
       <section className={styles.values}>
        <div className={styles.aboutContainer}>
          <h2>Our Vision</h2>
            <p>To be the best tourism company in East Africa for mountaineering and Wildlife safaris with efficiency
              and reliability
              </p>
        </div>
      </section>
      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.container}>
          <h2>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            {[
              {
                title: "Authentic Experiences",
                description: "We go beyond tourist spots to show you the real Tanzania",
                icon: "🌍"
              },
              {
                title: "Sustainable Tourism",
                description: "Committed to preserving nature and supporting local communities",
                icon: "♻️"
              },
              {
                title: "Expert Guidance",
                description: "Our guides average 10+ years of experience in the field",
                icon: "🧭"
              },
              {
                title: "Personalized Service",
                description: "Tailored itineraries to match your travel style",
                icon: "✨"
              }
            ].map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.icon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className={styles.team}>
        <div className={styles.container}>
          <h2>Meet The Team</h2>
          <p className={styles.subtitle}>
            Our dedicated team of safari experts, guides, and travel designers
          </p>
          <div className={styles.teamGrid}>
            {[
              {
                name: "Juma Mbeki",
                role: "Founder & Head Guide",
                image: "/images/faru.jpg",
                bio: "Born in Arusha, Juma has 20+ years of guiding experience across East Africa."
              },
              {
                name: "Neema Johnson",
                role: "Operations Manager",
                image: "/images/faru.jpg",
                bio: "Ensures every detail of your journey is perfectly arranged."
              },
              {
                name: "Thomas Mushi",
                role: "Senior Safari Guide",
                image: "/images/faru.jpg",
                bio: "Wildlife expert with unparalleled knowledge of animal behavior."
              }
            ].map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamImage}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                  />
                </div>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Start Your Adventure?</h2>
          <a href="/contact" className={styles.button}>
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  );
}