export interface Tour {
  id: string;
  title: string;
  slug: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  highlights: string[];
  includedItems: string[];
  excludedItems: string[];
  image: string;
  description: string;
  itinerary: {
    day: number;
    title: string;
    content: string;
    accomodation?: string;
  }[];
}

export const upcomingTours: Tour[] = [
  {
    id: 'marangu-route',
    title: '6 Days Marangu Route',
    slug: 'marangu-route',
    duration: '6 Days',
    difficulty: 'Moderate',
    image: '/images/package1.jpeg',
    highlights: [
      "Easiest route to Kilimanjaro's summit",
      "Mountain hut accommodations",
      "Summit at Uhuru Peak (5,895m)"
    ],
    includedItems: [
      "Kilimanjaro trekking according to the itinerary",
      "Professional, English-speaking guide",
      "Mountain crew (cook & porters)",
      "Overnight stays in hotels and mountain huts",
      "Meals according to the itinerary",
      "Drinking water",
      "All national park fees",
      "All mentioned transfers",
      "Extra oxygen cylinder"
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
    description: `The Marangu route is perhaps the easiest and most comfortable route...`,
    itinerary: [ /* ... */ 
       { day: 1, title: "Machame Gate to Machame Camp", content: "Hike through rainforest to Machame Camp." },
      { day: 2, title: "Machame Camp to Shira Camp", content: "Trek through moorland with views of Shira Plateau." },
      { day: 3, title: "Shira Camp to Barranco Camp", content: "Hike via Lava Tower for acclimatization." },
      { day: 4, title: "Barranco Camp to Karanga Camp", content: "Climb the Barranco Wall and trek to Karanga." },
      { day: 5, title: "Karanga Camp to Barafu Camp", content: "Short trek to Barafu base camp." },
      { day: 6, title: "Summit Uhuru Peak and descend to Mweka Camp", content: "Midnight start for summit attempt, descend to lower camp." },
      { day: 7, title: "Mweka Camp to Mweka Gate", content: "Final descent to the park gate." }
    ]
  },

  {
    id: 'machame-route',
    title: '7 Days Machame Route',
    slug: 'machame-route',
    duration: '7 Days',
    difficulty: 'Challenging',
    image: '/images/kilipeak.jpeg',
    highlights: [
      "Popular and scenic route",
      "High summit success rate",
      "Diverse ecosystems: rainforest to alpine desert"
    ],
    includedItems: [
      "All park entry fees and taxes",
      "Professional English-speaking guides",
      "Porters and cooks",
      "Meals and drinking water",
      "Camping equipment (tents, tables, chairs)",
      "Transfers to and from park gate",
      "Emergency oxygen cylinder"
    ],
    excludedItems: [
      "Flights",
      "Sleeping bags and personal gear",
      "Visa fees",
      "Tips for guides and crew",
      "Travel insurance",
      "Personal expenses"
    ],
    description: `The Machame Route, also known as the “Whiskey Route,” is one of the most scenic routes up Kilimanjaro, offering panoramic views across different climate zones.`,
    itinerary: [
      { day: 1, title: "Machame Gate to Machame Camp", content: "Hike through rainforest to Machame Camp." },
      { day: 2, title: "Machame Camp to Shira Camp", content: "Trek through moorland with views of Shira Plateau." },
      { day: 3, title: "Shira Camp to Barranco Camp", content: "Hike via Lava Tower for acclimatization." },
      { day: 4, title: "Barranco Camp to Karanga Camp", content: "Climb the Barranco Wall and trek to Karanga." },
      { day: 5, title: "Karanga Camp to Barafu Camp", content: "Short trek to Barafu base camp." },
      { day: 6, title: "Summit Uhuru Peak and descend to Mweka Camp", content: "Midnight start for summit attempt, descend to lower camp." },
      { day: 7, title: "Mweka Camp to Mweka Gate", content: "Final descent to the park gate." }
    ]
  },

  {
    id: 'lemosho-route',
    title: '8 Days Lemosho Route',
    slug: 'lemosho-route',
    duration: '8 Days',
    difficulty: 'Moderate',
    image: '/images/uhurupeople.jpeg',
    highlights: [
      "Remote and less crowded",
      "High success rate due to acclimatization time",
      "Stunning scenery and panoramic views"
    ],
    includedItems: [
      "All park fees and rescue fees",
      "English-speaking professional guides",
      "Mountain crew (porters and cook)",
      "Accommodation in tents",
      "Meals and water on the mountain",
      "Airport transfers",
      "Oxygen cylinder for emergencies"
    ],
    excludedItems: [
      "International flights",
      "Tanzania visa",
      "Sleeping bags and personal equipment",
      "Tips",
      "Insurance",
      "Hotel stays before/after climb (unless arranged)"
    ],
    description: `The Lemosho Route is one of the most beautiful Kilimanjaro routes, starting on the western side and joining the Machame Route before summit.`,
    itinerary: [
      { day: 1, title: "Londorossi Gate to Mti Mkubwa", content: "Hike through rainforest to Big Tree Camp." },
      { day: 2, title: "Mti Mkubwa to Shira 1 Camp", content: "Ascend through heather zone to Shira Plateau." },
      { day: 3, title: "Shira 1 to Shira 2 Camp", content: "Trek across the plateau." },
      { day: 4, title: "Shira 2 to Barranco Camp via Lava Tower", content: "Acclimatize via Lava Tower then descend." },
      { day: 5, title: "Barranco to Karanga Camp", content: "Climb the Great Barranco Wall." },
      { day: 6, title: "Karanga to Barafu Camp", content: "Short trek to base camp." },
      { day: 7, title: "Barafu to Uhuru Peak to Mweka Camp", content: "Summit attempt and descend." },
      { day: 8, title: "Mweka Camp to Mweka Gate", content: "Final trek through forest to gate." }
    ]
  }
];

export const wildlife: Tour[] = [
 
  {
    id: 'camping-safari',
    title: '4-Days Best Tanzania camping Safari',
    slug: 'camping-safari',
    duration: '4 Days',
    difficulty: 'Moderate',
    image: '/images/package2.jpg',
    highlights: [
      "seeing amazing animals and nature", 
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
        title: 'ARUSHA – TARANGIRE NATIONAL PARK',
        content: 'We depart from Arusha in the morning and drive to Tarangire National Park. Tarangire is famous for its herds of Elephants and ancient Baobab trees. This park is also well known for its high concentration of game and fantastic bird life. Other animals to be spotted include leopards, giraffes, zebras, lions, etc. We enjoy a game drive until late afternoon and then drive to Karatu for Overnight at Kizumba Campsite'
      },
      {
        day: 2,
        title: 'KARATU TO   SERENGETI NATIONAL PARK',
        content: 'We depart after breakfast to Serengeti via the Ngorongoro conservation area where we have a picnic lunch. We arrive for an afternoon game drive on the northern side of Serengeti, entering the park. Serengeti offers the most enthralling game-viewing in Africa: great herds of buffalo and wildebeests, groups of elephants and giraffes, eland, impala and Grant’s gazelle, lions, leopards, and many others. Dinner and overnight stay at the accommodation at Seronera Campsite'
      },
      {
        day: 3,
        title: "FULL GAME DRIVE IN SERENGETI NATIONAL PARK",
        content: "Breakfast at around 0800am. Proceed with morning and afternoon game drives in the Serengeti with a lunch and leisure break at the Luxury tented camp in the mid-afternoon. The term Serengeti means endless plains in the Masai language. In the central plains, there are carnivores like leopards, lions, hyenas, and cheetahs. This park is normally the scene of the annual migration of wildebeest and zebra that occurs between the Kenyan Mara and the Serengeti."
      },
      {
        day: 4,
        title: " NGORONGORO CRATER TO ARUSHA ",
        content: "After breakfast, with a picnic lunch packed, we depart for a game drive to the Ngorongoro crater. A real-life Eden, you will be amazed by its abundant wildlife that gets very close to the vehicle. The crater floor supports more than 25000 large mammals including the remaining Black Rhinos, Zebras, Gnus, Gazelles, Buffalos, Lions, Hippos, Elephants, Elands, Hyenas, and several aquatic birds. We explore the crater till late afternoon drive back to Arusha and take your flight Zanzibar/home."
      },
     
      // ... other days
    ]
  },
   {
    id: '4days-camping-safari',
    title: '4-Day 3 nights Safari to Tarangire, Ngorongoro & Serengeti National Park ',
    slug: '4days-camping-safari',
    duration: '4 Days 3 nights',
    difficulty: 'Moderate',
    image: '/images/package3.jpg',
    highlights: [
      "seeing amazing animals and nature", 
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
    id: '2-days-1-ninght-safary-to-tarangire',
    title: '2 DAYS 1 NIGHT SAFARI TO TARANGIRE NATIONAL PARK AND NGORONGORO CRATER: PRIVATE SAFARI ',
    slug: '2-days-1-ninght-safary-to-tarangire',
    duration: '2 days 1 night',
    difficulty: 'Moderate',
    image: '/images/roadlion.jpeg',
    highlights: [
      "seeing amazing animals", 
    ],
   includedItems: [
    "All park fees",
    "Accommodation (full board)",
    "Guide fees",
    "Meals (breakfast, lunch, and dinner)",
    "Safari Cruiser",
    "Drinking water",
    "Transportation",
    "Flight tickets (from Zanzibar)",
    "Professional English guide"
   ],
    excludedItems: [
      "Tips for the guide",
      "Items of personal use"
    ],

    description: `Experience a thrilling 2-day private safari through Tarangire National Park and the Ngorongoro Crater, featuring close encounters with elephants, lions, and the iconic Big Five. Enjoy game drives, scenic landscapes, and overnight lodge accommodation in Karatu for an unforgettable adventure.
`, // Full description
    itinerary: [
      {
        day: 1,
        title: 'Tarangire national park ',
        content: 'Pick up from your hotel in Arusha in the morning and enjoy a scenic drive to Tarangire National Park, renowned for its large elephant herds and iconic baobab trees. Upon arrival, embark on an exhilarating game drive, spotting wildlife such as lions, zebras, and various bird species. You will have a packed lunch surrounded by the beautiful landscapes of the park. Continue your afternoon adventure, observing more wildlife and enjoying the stunning scenery. As the sun sets, watch for nocturnal animals beginning to emerge. After a full day of exploration, check out and drive to a cozy lodge in Karatu for dinner and an overnight stay, where you can relax and recount the day\'s adventures.'
      },
      {
        day: 2,
        title: 'Ngorongoro crater ',
        content: 'After a hearty breakfast at the lodge, depart for Ngorongoro Crater, a UNESCO World Heritage Site and one of the best places to see the "Big Five." Enjoy the breathtaking views as you descend into the crater, home to diverse wildlife. Spend the morning exploring, with opportunities to observe lions, elephants, buffalo, leopards, and rhinos up close. Enjoy a picnic lunch at the hippo pool picnic area, watching hippos while you eat. In the afternoon, continue your game drive, taking in the stunning landscapes framed by the crater walls. As the day winds down, ascend back out of the crater and return to Arusha, concluding your safari adventure.'
      },
      // ... other days
    ]
  },
  {
    id: '4-days-4-ninght-arusha--tarangire',
    title: '5 Days 4 Nights Safari from Arusha (private) Tarangire, Serengeti, Ngorongoro. ',
    slug: '4-days-4-ninght-safary-arusha-to-tarangire',
    duration: '4 days 4 night',
    difficulty: 'Moderate',
    image: '/images/cars.jpeg',
    highlights: [
      "seeing amazing animals", 
      "USD $1600 per person from Arusha. Private safari "
    ],
   includedItems: [
    "Accommodation",
    "Private safari car",
    "Professional guide",
    "All meals and drinks",
    "Game drive",
    "Entrance fees",
    "Government tax",
    "All park fees",
    "Masai Tour"
   ],
    excludedItems: [
      "Tips for the guide",
      "Items of personal use"
    ],

    description: `Embark on a 5-day private safari through Tanzania's top parks—Tarangire, Serengeti, and Ngorongoro—featuring breathtaking landscapes, diverse wildlife, and unforgettable game drives. Enjoy close encounters with elephants, big cats, and the Big Five, with full-board lodging and expert guides throughout.`, // Full description
    itinerary: [
      {
        day: 1,
        title: 'Arusha – Tarangire National Park',
        content: 'In the morning you will be picked up from the airport to start your safari with a drive from Arusha Town to the Tarangire National Park with packed lunch. The park, roughly the size of Luxemburg, covers an area of approximately 2,600 km². The landscape of savannah, seasonal swamps and giant baobab trees is home to Masai giraffes, buffaloes, hartebeest, eland, fringe-eared oryx, the weird-looking long-necked gerenuk and over 550 species of birds. But it is the elephants, Tarangire is famous for and the park, where herds of up to 300 animals roam, is probably one of the best places in East Africa to see them and to get close to these giant creatures. After an extensive game drive, then drive to karatu at the lodge  for dinner and overnight.'
      },
      {
        day: 2,
        title: 'Serengeti National Park',
        content: 'After breakfast drive to Serengeti National Park with packed lunch, while traveling through the Ngorongoro Conservation Area you might stop for a breath-taking view over the Ngorongoro Crater before continuing to the Serengeti National Park. Serengeti means “endless plains” in the language of the Maasai and you will see the grassland savannah stretching to the horizon. Bizarre rock formations called kopjes dot the grassy landscape where predators are often seen. Depending on the season you will witness the migration of thousands of animals for which this park is famous for. You will arrive at your campsite for dinner and overnight in the Seronera Valley in the central Serengeti in the late afternoon after a game drive through the central Serengeti.'
      },
      {
        day: 3,
        title: 'Serengeti national park',
        content: 'This is the another day and full day in Serengeti, National park,till evening going back the camp for dinner and rest '
      },
      {
        day: 4,
        title: 'Serengeti National Park',
        content: 'After breakfast you join another game drive in the Serengeti National Park. This morning you might spot animals you haven’t seen yet. The Serengeti is big ,you will have game drive till evening and heading back to the camp for dinner and rest.'
      },
      {
        day: 5,
        title: 'NGORONGORO CRATER–to Arusha',
        content: 'Rise and shine! After breakfast at daybreak, you drive down into the crater with packed lunch. Inside the world’s largest caldera, you will see a diversity of wildlife ranging from black rhinos, Grant’s and Thomson’s gazelles, lions and leopards to elephants and mountain reedbucks in the forests on the slopes. You might also see buffaloes, spotted hyenas, rare wild dogs and some of the more than 500 bird species of the area. After an intensive game drive and a picnic lunch, you will leave the caldera in late afternoon then drive to Arusha.'
      }
      // ... other days
    ]
  },
  // ... other tours
];

export  const dayTrips: Tour[] = [
//     {
//       id: "serengeti-national-park",
//       slug: "serengeti-national-park",
//       title: "Serengeti National Park",
//       image: "/images/nationalpark.jpg",
//       duration: "6-8 hours",
//       difficulty: 'Moderate',
//       highlights: [
//          "Enjoy an exciting game drive offering breathtaking views of Mount Meru rising above the surrounding savannah landscape.",
//           "Discover the serene beauty of Momella Lakes, known for their stunning colors and diverse bird species.",
//           "Witness majestic giraffes and strikingly patterned zebras up close as they roam freely through their natural environment."
//       ], 
      
//    includedItems: [
//   "Professional, English-speaking guide",
//   "Drinking water",
//   "All national park fees",
//   "All mentioned transfers",
//    ],
//     excludedItems: [
//       "Sleeping bag",
//       "Flights",
//       "Alcoholic and soft drinks",
//       "Visa fees",
//       "Tips",
//       "Personal spending money for souvenirs etc.",
//       "Travel insurance"
//     ],

//     description: `Serengeti National Park offers a thrilling 6–8 hour moderate adventure through breathtaking savannah landscapes. Visitors can enjoy scenic views of Mount Meru, vibrant Momella Lakes, and encounter giraffes and zebras up close.**
// `, // Full description
//     itinerary: [
//       {
//         day: 1,
//         title: '',
//         content: ''
//       },
//       // ... other days
//     ]
//     },
  {
    id: '4days-camping-safari',
    title: 'Ngorongoro National Park ',
    slug: '4days-camping-safari',
    duration: '8-10 hours ',
    difficulty: 'Moderate',
    image: '/images/package3.jpg',
    highlights: [
      
  "Descend into the Ngorongoro Crater, home to over 25,000 animals including the rare black rhino.",
  "Enjoy spectacular views from the crater rim, offering breathtaking panoramas of the lush caldera below.",
  "Spot the Big Five in one day, as this unique ecosystem supports lions, elephants, buffaloes, leopards, and rhinos."

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
    image: '/images/carandgirl.jpeg',
    highlights: [
      "Spot all Big Five in Serengeti and Ngorongoro, plus tree-climbing lions and flamingos in Lake Manyara.",
      "Experience everything from Tarangire’s baobab-studded terrain to the vast Serengeti plains and the breathtaking Ngorongoro Crater.",
      "Enjoy nights under the stars in dome tents at public campsites with all meals and immersive safari activities included."
    ],
   includedItems: [
    "Airport transfer",
  "Hotels in Arusha city",
    "Transports",
    "Camping/Lodge safari according to the itinerary",
    "Transportation in a 4×4 safari vehicle",
    "Professional, English-speaking guide",
    "Professional, English-speaking safari cook",
    "Overnight stays in safari tents",
    "Camping equipment (tents, sleeping mats, chairs, tables etc.)",
    "Meals according to the itinerary",
    "Mineral water",
    "All mentioned activities",
    "All national park fees",
    "Flying Doctors insurance (AMREF) during the safari"
   ],
    excludedItems: [
        "Sleeping bag",
        "Flights",
        "Optional activities",
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
        title: 'Arusha National Park',
        content: 'Pick up at 8:30 AM from your Hotel in Arusha & depart for Arusha National Park. Walking with an Armed Ranger, you will have picnic lunch and game drive in the Park. The park is at the base of Mount Meru, which is good for climbing. It has a range of habitats including forest – home to the black-and-white colobus monkey – and is excellent for birding. Several lakes often host flocks of flamingo. The park’s appeal is mainly its scenery. The habitat diversity spans from montane (mountain) rain forest to moist savannah to alpine moorland. Post the game drive, you will head back to your camp where a delicious dinner awaits you.',
        accomodation: 'Accommodations: Mvuli Hotel, OutPost Lodge or Natron Palace Hotel'
      },
      {
        day: 2,
        title: 'Arusha to Tarangire National Park',
        content: 'After breakfast, depart for Tarangire National Park with picnic lunch for full day game drive. Tanzania’s third largest National park is known for its majestic baobab trees that dot the landscape, dwarfing the animals that feed beneath them. The Tarangire River is the centre piece of this park which is famous for some of the largest herds of elephants in Africa. Here you may see lion, leopard, cheetah, lesser Kudu, buffalo, Oryx, eland, giraffe and zebra. The eventful day comes to an end with a heavy dinner and a good night’s rest in your camp.',
        accomodation: 'Accommodation:Sun Bright Tented Camp, Whistling Thorn or Fanaka Lodge'
      },
      {
        day: 3,
        title: "Tarangire to Serengeti National Park",
        content: "After finishing up a good breakfast, you will head out towards the Serengeti National Park and travel in the midst of the never ending plain grasslands. The Serengeti is arguably the most impressive wildlife sanctuary in the world. You will have an afternoon game drive in the endless plains of the Serengeti for a chance to see the great herds of wildebeest, zebras and gazelles or a pride of lions lounging in the shade. A picnic lunch will be done during the day long game drive itself. The eventful day comes to an end with a heavy dinner and a good night’s rest in your camp.",
        accomodation: 'Accommodation: Seronera Public Camp, Heritage Luxury Lodge, Domel Lodge or Serengeti Wilderness Camp'
      },
      {
        day: 4,
        title: "Serengeti National Park to Ngorongoro Area",
        content: "After breakfast, you will have a morning game drive in Serengeti National Park. Later depart for Ngorongoro Crater Rim with picnic lunch. Ngorongoro Crater is the largest collapsed volcanic crater in the world and fourteen kilometers of isolated natural beauty. Ngorongoro Crater is surrounded by a ring of extinct volcanoes and the floor, dotted with watering holes, shelters some 30,000 animals. The eventful day comes to an end with a heavy dinner and a good night’s rest in your camp.",
        accomodation: 'Accommodation: Simba Public Camp, Serena Lodge or Rhino Lodge'
      },
      {
        day: 5,
        title: 'Ngorongoro Crater Tour',
        content: 'After an early breakfast, descend to the crater floor for game drive(5 hours). You can expect to see lions, elephants, Zebras, Hippos, Flamingos, Jackals, Rhinos Antelopes and many birds. The birds seen here include eagle, vulture, and flamingos in the Crater Lake, stork, bats, giant vulture, sacred ibis, kori bustard, blacksmith plover, long necked heron and the cattle eagle. Post the picnic lunch at the beautiful Hippo pool, you will begin a steep ascend to the top exit of the crater. With a 2hr drive left to your accommodation in Karatu, the day will come to a close. Freshly made delicious dinner is kept ready for you at your camp. All these days of the safari, will have you quite tired and a good rest is essential. The next day you will begin the last leg of your safari.',
        accomodation: 'Accommodations: Sun Bright Tented Camp or Fanaka Lodge'
      },
      {
        day: 6,
        title: 'Lake Manyara to Arusha',
        content: 'The final day of your safari will begin as usual by 8 AM after a luscious breakfast. The destination for today is Arusha via Manyara National Park where you will have a half day game drive. As you enter the national park by 9 AM, lush forests of Acacia and Mahogany trees begin to set the mood for what is waiting ahead. The game drive will go on till mid-afternoon with a small break for a picnic lunch. During the game drive watch out for buffaloes, giraffes, impalas, baboons and the blue monkeys. Another spectacle of the Lake Manyara National park is the tree climbing lions, however spotting them is a game of luck. In the right season, you can see the shoreline turning pink with millions of flamingos flocking there. By mid afternoon, you will branch out and head towards Arusha where you will be dropped off to your preferred location by about 6PM in the evening. With an incredible experience and loads of memories to cherish, this is the time you bid goodbye to your team.',
        accomodation: ''
      }
     
      // ... other days
    ]
  },
    {
    id: '4-days-sharing-camping-budget-safari',
    title: '4 DAYS SHARING CAMPING BADGET SAFARI TO TARANGIRE, SERENGETI NATIONAL PARK, NGORONGORO CRATER ',
    slug: '4-days-sharing-camping-budget-safari',
    duration: '4 Days ',
    difficulty: 'Moderate',
    image: '/images/cargirls.jpeg',
    highlights: [
        "Experience close encounters with large herds of elephants in Tarangire National Park, home to over 550 bird species and iconic baobab landscapes.",
        "Explore the vast Serengeti plains and witness the Big Five along with the seasonal great migration of thousands of wildebeest and zebras.",
        "Descend into the Ngorongoro Crater, the world’s largest unbroken caldera, and enjoy game drives surrounded by over 25,000 animals including rare black rhinos."
    ],
   includedItems: [
  "All transport / Pick up from airport to hotel",
  "Camping safari according to the itinerary",
  "Transportation in a 4×4 safari vehicle",
  "Professional English-speaking driver-guide",
  "Professional, English-speaking safari cook",
  "Overnight stays in safari tents",
  "Camping equipment (tents, sleeping mats, chairs, tables, etc.)",
  "Meals according to the itinerary",
  "Mineral water",
  "All the mentioned activities",
  "All national park fees",
  "Unlimited game drive"
   ],
    excludedItems: [
       "Sleeping bag",
        "Flights",
        "Optional activities",
        "Alcoholic and soft drinks",
        "Visa fees",
        "Tips",
        "Personal spending money for souvenirs etc.",
        "Travel insurance"
    ],

    description: `Explore Tarangire National Park, home to massive elephant herds and ancient baobabs.
Journey through the breathtaking Ngorongoro Conservation Area to reach Serengeti’s vast plains.
Experience thrilling game drives in Serengeti and spot the Big Five in their natural habitat.
Descend into the Ngorongoro Crater for incredible wildlife viewing before returning to Arusha.`, // Full description
    itinerary: [
      {
        day: 1,
        title: 'Arusha – Tarangire National Park',
        content: 'In the morning you will start your safari with a drive to the Tarangire National Park with packed lunch. The park, roughly the size of Luxemburg, covers an area of approximately 2,600 km². The landscape of savannah, seasonal swamps and giant baobab trees is home to Masai giraffes, buffaloes, hartebeest, eland, fringe-eared oryx, the weird-looking long-necked gerenuk and over 550 species of birds. But it is the elephants, Tarangire is famous for and the park, where herds of up to 300 animals roam, is probably one of the best places in East Africa to see them and to get close to these giant creatures. After an extensive game drive, then drive to Kizumba Camp Site for dinner and overnight.',
      },
      {
        day: 2,
        title: 'Serengeti National Park',
        content: 'After breakfast drive to Serengeti National Park with packed lunch, while traveling through the Ngorongoro Conservation Area you might stop for a breath-taking view over the Ngorongoro Crater before continuing to the Serengeti National Park. Serengeti means “endless plains” in the language of the Maasai and you will see the grassland savannah stretching to the horizon. Bizarre rock formations called kopjes dot the grassy landscape where predators are often seen. Depending on the season you will witness the migration of thousands of animals for which this park is famous for. You will arrive at your campsite for dinner and overnight in the Seronera Valley in the central Serengeti in the late afternoon after a game drive through the central Serengeti.',
      },
      {
        day: 3,
        title: "Serengeti National Park – Ngorongoro Conservation Area",
        content: "After breakfast you join another game drive in the Serengeti National Park. This morning you might spot animals you haven’t seen yet. The Serengeti is also home to the Big Five – lion, elephant, buffalo, rhino and leopard – and today you might be able to see all the members of this group. After lunch at a picnic site, you will drive in direction of the Ngorongoro Crater. As soon as you have reached the edge of the crater, the caldera opens up before you. Over 25,000 animals live in this approximately 20 km wide crater. You will spend the night and dinner at a Simba Campsite directly on the crater’s edge with fantastic views over the caldera.",
      },
      {
        day: 4,
        title: 'Ngorongoro Crater – Arusha',
        content: 'Rise and shine! After breakfast at daybreak, you drive down into the crater with packed lunch. Inside the world’s largest caldera, you will see a diversity of wildlife ranging from black rhinos, Grant’s and Thomson’s gazelles, lions and leopards to elephants and mountain reedbucks in the forests on the slopes. You might also see buffaloes, spotted hyenas, rare wild dogs and some of the more than 500 bird species of the area. After an intensive game drive and a picnic lunch, you will leave the caldera in late afternoon then drive to Arusha. '
      }
     
      // ... other days
    ]
  },
    // Add more day trips...
  ];