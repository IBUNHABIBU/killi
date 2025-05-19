import Image from 'next/image';
import styles from './Services.module.scss';

const services = [
  {
    title: "Wildlife Safaris",
    icon: "/icons/safari.svg",
    description: "Experience the Great Migration in Serengeti, witness Ngorongoro Crater's biodiversity, and explore Tarangire's elephant herds with our expert guides.",
    highlights: [
      "Serengeti National Park",
      "Ngorongoro Conservation Area",
      "Tarangire National Park"
    ]
  },
  {
    title: "Kilimanjaro Climbing",
    icon: "/icons/mountain.svg",
    description: "Conquer Africa's highest peak through various routes with our certified mountain guides and premium equipment.",
    highlights: [
      "Marangu Route (6 days)",
      "Machame Route (7 days)",
      "Lemosho Route (8 days)"
    ]
  },
  {
    title: "Zanzibar Beach Holidays",
    icon: "/icons/beach.svg",
    description: "Relax on pristine white-sand beaches and explore Stone Town's UNESCO heritage sites.",
    highlights: [
      "Nungwi Beach",
      "Jozani Forest",
      "Spice Tours"
    ]
  },
  {
    title: "Cultural Tourism",
    icon: "/icons/culture.svg",
    description: "Engage with Maasai, Hadzabe, and other indigenous communities through authentic cultural experiences.",
    highlights: [
      "Maasai Village Visits",
      "Hadzabe Hunter-Gatherers",
      "Traditional Dance Performances"
    ]
  }
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.header}>
        <h2>Our Tanzanian Adventures</h2>
        <p>Specialized experiences crafted with local expertise</p>
      </div>
      
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>
              <Image 
                src={service.icon} 
                alt={service.title} 
                width={60} 
                height={60} 
              />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}