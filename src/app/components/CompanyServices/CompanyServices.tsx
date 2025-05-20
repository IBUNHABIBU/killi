import Image from 'next/image';
import styles from './CompanyServices.module.scss';

const Oservices = [
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
    title: "Kilimanjaro Climbing", 
    icon: "/icons/montain.svg",
    image: "/images/nyumbu.jpg",
    description: "Summit Africa's highest peak via scenic routes with our certified mountain crews and premium equipment.",
    highlights: [
      "6-8 day itineraries",
      "High-altitude medics",
      "Eco-friendly climbs"
    ]
  },
  // Add other services...
];


const services = [
  {
    title: "Wildlife Safaris",
    image: "/images/nyumbu.jpg",
    description: "Witness the Great Migration in Serengeti and Ngorongoro's Big Five with our expert Maasai guides.",
    highlights: [
      "Serengeti National Park",
      "Ngorongoro Crater",
      "Tarangire's Elephants"
    ]
  },
  {
    title: "Kilimanjaro Climbing",
    image: "/images/klimanjaro.jpg", 
    description: "Conquer Africa's highest peak through scenic routes with our certified mountain crews.",
    highlights: [
      "Marangu Route",
      "Machame Route", 
      "Lemosho Route"
    ]
  },
  {
    title: "Zanzibar Holidays",
    image: "/images/zanzibar.jpg",
    description: "Relax on pristine beaches and explore Stone Town's UNESCO heritage sites.",
    highlights: [
      "Nungwi Beach",
      "Spice Tours",
      "Jozani Forest"
    ]
  },
  {
    title: "Cultural Experiences",
    image: "/images/culture.jpg",
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}