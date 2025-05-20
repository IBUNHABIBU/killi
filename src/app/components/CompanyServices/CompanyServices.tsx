import Image from 'next/image';
import styles from './CompanyServices.module.scss';
import Link from 'next/link';

const services = [
  {
    title: "Wildlife Safaris",
    icon: "/icons/safari.svg",
    image: "/images/klimanjaro.jpg",
    description: "Track the Big Five in Serengeti and witness Ngorongoro's unparalleled biodiversity with our expert guides.",
    highlights: [
      "Great Migration viewing",
      "Balloon safaris available",
      "Luxury lodge options"
    ]
  },
  {
    title: "Mountain Climbing", 
    icon: "/icons/mountain.svg",
    image: "/images/nyumbu.jpg",
    description: "Summit Africa's highest peak via scenic routes with our certified mountain crews and premium equipment.",
    highlights: [
      "6-8 day itineraries",
      "High-altitude medics",
      "Eco-friendly climbs"
    ]
  },
  // Add other services...
    {
    title: "Zanzibar Holidays",
    icon: "/icons/beach.svg",
    image: "/images/zanzibar.jpeg",
    description: "Relax on pristine beaches and explore Stone Town's UNESCO heritage sites.",
    highlights: [
      "Nungwi Beach",
      "Spice Tours",
      "Jozani Forest"
    ]
  },
  {
    title: "Cultural Experiences",
    icon: "/icons/culture.svg",
    image: "/images/maasai.jpeg",
    description: "Engage with Maasai and Hadzabe communities through authentic interactions.",
    highlights: [
      "Maasai Village Visits",
      "Hadzabe Hunting",
      "Traditional Dances"
    ]
  }
];


export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            {/* Image Background */}
            <div className={styles.imageContainer}>
              <Image
                src={service.image}
                alt={service.title} 
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.imageOverlay} />
            </div>

            {/* Icon + Content */}
            <div className={styles.content}>
              <div className={styles.iconHeader}>
                <Image 
                  src={service.icon}
                  alt=""
                  width={48}
                  height={48}
                  className={styles.serviceIcon}
                />
                <h3>{service.title}</h3>
              </div>
              
              <p>{service.description}</p>
              
              <ul>
                {service.highlights.map((highlight, i) => (
                  <li key={i}>
                    <span className={styles.bullet}>•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              <Link 
                href='/contact'
                className={styles.ctaButton}
              >
                Book Now
                <span className={styles.ctaArrow}>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}