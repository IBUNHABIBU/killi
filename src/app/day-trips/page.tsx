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
  {
    id: '6-days-tanzania-explorer-safari',
    title: '6 Days Tanzania Explorer Safari',
    slug: '6-days-tanzania-explorer-safari',
    duration: '6 Days ',
    difficulty: 'Moderate',
    image: '/images/package3.jpg',
    highlights: [
      "Big Five & Rare Wildlife: Spot all Big Five in Serengeti and Ngorongoro, plus tree-climbing lions and flamingos in Lake Manyara.",
      "Diverse Scenic Landscapes: Experience everything from Tarangire’s baobab-studded terrain to the vast Serengeti plains and the breathtaking Ngorongoro Crater.",
      "Authentic Camping Adventure: Enjoy nights under the stars in dome tents at public campsites with all meals and immersive safari activities included."
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

    description: `This tour package will give one an exciting opportunity to visit the most beautiful parks in northern Tanzania. This includes visiting the endless plains of Serengeti National Park where you will be able to see all the big five. You will also visit Tarangire National park which is famous for a huge population of elephants and also the Ngorongoro Crater which is locally known as the garden of animals where there is a big chance to spot the big five in one day and finally you will end your safari on the beautiful shores of Lake Manyara which is famous for its flamingoes and tree climbing lions which are unique to this region.

In this option, you will stay in public campsites, located inside (For Serengeti / Ngorongoro) or outside the park ( For Lake Manyara / Tarangire). Accommodation will be in waterproof 2-person-tents (2.5m x 2.5m and 1.8m high) with built-in mosquito nets at the entrances and windows. The dome tents will be pitched overnight at the public campsite and packed in the morning. You will be sleeping on foam mattress and will have access to shared public bathrooms and toilets. Please check the camping pictures above for reference.`, // Full description
    itinerary: [
      {
        day: 1,
        title: 'ARUSHA TO TARANGIRE NATIONAL PARK.',
        content: ''
      },
      {
        day: 2,
        title: 'NGORONGORO CRATER.',
        content: ''
      },
      {
        day: 3,
        title: "SERENGETI NATIONAL PARK.",
        content: ""
      },
      {
        day: 4,
        title: " SERENGETI NATIONAL PARK TO ARUSHA. ",
        content: ""
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
        <h2>Don&apos;t See Your Perfect Trip?</h2>
        <p>We customize private day excursions</p>
        <Link href="/contact" className={styles.ctaButton}>
          Request Custom Itinerary
        </Link>
      </section>
    </main>
  );
};

export default DayTripsPage;