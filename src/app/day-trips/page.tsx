import React from 'react';
import Link from 'next/link';
import styles from './daytrips.module.scss';

const DayTripsPage = () => {
  const dayTrips = [
    {
      id: 1,
      title: "Serengeti National Park",
      image: "/images/nationalpark.jpg",
      duration: "6-8 hours",
      highlights: [
        "Game drive with views of Mount Meru",
        "Visit Momella Lakes",
        "See giraffes & zebras up close"
      ],
    },
  {
    id: '4days-camping-safari',
    title: 'Ngorongoro National Park ',
    slug: '4days-camping-safari',
    duration: '8-10 hours ',
    difficulty: 'Moderate',
    image: '/images/package3.jpg',
    highlights: [
      "seeing amazing animals and nature", 
      "seeing geological wonders",
      "maasai culture"
    ],
   includedItems: [
  "Professional, English-speaking guide",
  "Mountain crew (cook & porters)",
  "Overnight stays in hotels and mountain huts",
  "Meals according to the itinerary",
  "Drinking water",
  "All national park fees",
  "All mentioned transfers",
   ],
    excludedItems: [
      "Sleeping bag",
      "Flights",
      "Alcoholic and soft drinks",
      "Visa fees",
      "Tips",
      "Personal spending money for souvenirs etc.",
      "Travel insurance"
    ],

    description: `  which might be an advantage compared to the camping routes.`, // Full description
    itinerary: [
      {
        day: 1,
        title: 'ARUSHA TO TARANGIRE NATIONAL PARK.',
        content: 'You will be picked up from the Hotel and driven to Tarangire National Park for the day game drive with your picnic lunch boxes en route. In the evening, drive to Karatu for dinner and overnight.The park is located slightly off the main safari route. Tarangire National Park is a lovely quiet park in Northern Tanzania that is most famous for its elephant migration, birding, and quiet and authentic safari atmosphere. The majority of travelers to the region either miss out on Tarangire altogether or venture into the park for a matter of hours leaving parts of Tarangire virtually untouched.'
      },
      {
        day: 2,
        title: 'NGORONGORO CRATER.',
        content: 'After breakfast, drive to Ngorongoro for the game drive in Ngorongoro Crater, and in the afternoon, drive to Serengeti National Park.The jewel in Ngorongoro crown is a deep, volcanic crater, the largest unflooded and unbroken caldera in the world. About 20 km across, 600 meters deep, and 300 sq km in area, the Ngorongoro Crater is a breathtaking natural wonder. We will visit Lake Magadi, a large but shallow alkaline lake in the southwestern corner, which is one of the main features of the crater. A large number of flamingos, hippos, and other water birds can usually be seen here.'
      },
      {
        day: 3,
        title: "SERENGETI NATIONAL PARK.",
        content: "Embark on a full-day game drive across the captivating Serengeti plains and the wildlife-rich Seronera area. Encounter the majesty of elusive lions, leopards, elephants, cheetahs, buffalo, zebras, wildebeests, elands, wild dogs, gazelles, and crocodiles in their natural habitat. It's a day filled with thrilling wildlife experiences amidst the stunning landscapes of SERENGETI ."
      },
      {
        day: 4,
        title: " SERENGETI NATIONAL PARK TO ARUSHA. ",
        content: "We begin our day by waking up early in the morning and checking out from our hotel. Following that, we embark on a drive back to Arusha, enjoying a game drive en route during the late afternoon. Eventually, we reach our destination in the evening, where you will be conveniently dropped off at your hotel."
      },
     
      // ... other days
    ]
  },
    // Add more day trips...
  ];

  return (
    <main className={styles.dayTripsPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Tanzania Day Trips</h1>
          <p>Experience the best of Northern Tanzania in a single day</p>
        </div>
      </section>

      {/* Day Trips Grid */}
      <section className={styles.tripsGrid}>
        <div className={styles.sectionHeader}>
          <h2>Our Popular Day Excursions</h2>
          <p>Perfect for travelers with limited time</p>
        </div>

        <div className={styles.grid}>
          {dayTrips.map((trip) => (
            <div key={trip.id} className={styles.tripCard}>
              <div className={styles.imageContainer}>
                <img 
                  src={trip.image} 
                  alt={trip.title}
                  className={styles.tripImage}
                />
                <div className={styles.durationBadge}>
                  <span>{trip.duration}</span>
                </div>
              </div>
              
              <div className={styles.tripContent}>
                <h3>{trip.title}</h3>
                <ul>
                  {trip.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                <Link 
                  href='/contact' 
                  className={styles.bookButton}
                >
                  Book This Trip
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Trip CTA */}
      <section className={styles.customTrip}>
        <h2>Don't See Your Perfect Trip?</h2>
        <p>We customize private day excursions</p>
        <Link href="/contact" className={styles.ctaButton}>
          Request Custom Itinerary
        </Link>
      </section>
    </main>
  );
};

export default DayTripsPage;