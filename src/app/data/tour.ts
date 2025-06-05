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
    image: '/images/package2.jpg',
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
    image: '/images/package3.jpg',
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
    image: '/images/package3.jpg',
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
    image: '/images/package3.jpg',
    highlights: [
      "seeing amazing animals", 
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
  // ... other tours
];