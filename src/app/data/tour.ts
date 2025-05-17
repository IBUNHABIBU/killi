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
    image: '/images/klimanjaro.jpg',
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

    description: `The Marangu route is perhaps the easiest and most comfortable route...`, // Full description
    itinerary: [
      {
        day: 1,
        title: 'Arusha – Marangu Gate',
        content: 'After breakfast at the hotel you will be taken to the Kilimanjaro National Park gate (1,840 m). Once the necessary paper work has been completed, your trek can begin and you will soon be hiking through the dense rain forest. You might be lucky to catch a glimpse of the thumbless black and white colobus monkeys scrambling through the lush vegetation. Approximately 4 hours later, you will reach your destination for the day, the Mandara Hut. After a well-earned rest, your guide will take you to the Maundi Crater where you can enjoy wonderful views of the Kenyan interior. Evening meal and overnight stay at Mandara Hut (2,700 m).'
      },
      {
        day: 2,
        title: 'Mandara Hut (2,700 m) – Horombo Hut (3,700 m)',
        content: 'The day begins with an early breakfast and shortly after you have left Mandara Hut, you will reach the treeline where vegetation changes to shrubs. Approximately 4 to 6 hours later, the Horombo Hut will come into sight at an altitude of about 3,700 m. From the hut you will have fantastic views overlooking Mawenzi, Kibo peak and the Masai steppe. Evening meal and overnight stay at the Horombo Hut.'
      },
      {
        day: 3,
        title: "Horombo Hut (3,700 m) – Zebra Rocks (3,980 m) – Horombo Hut (3,700 m)",
        content: "Today’s purpose is getting your body to acclimatise to the altitude. Acclimatisation should not be underestimated as it greatly improves your chances of reaching the summit. After a relaxing breakfast, you will set off on a 2 to 4 hour trek to Zebra Rocks (3,980 m). The distinctive black and white stripes give the rock formation its name. On your return to Horombo Hut, a cooked lunch will be waiting for you. You can relax in the afternoon and regain your strength for the hike the following day. Overnight and evening meal at Horombo Hut."
      },
      {
        day: 4,
        title: " Horombo Hut (3,700 m) – Kibo Hut (4,700 m)",
        content: "Today’s stage is long and tough. The trail passes the “last waterpoint” which is followed by the so-called “saddle”. This nearly plantless plateau links the summit of Kibo with Mawenzi. Today’s destination is Kibo Hut and it should be reached in about 5 to 6 hours. Tonight is an early night to get enough rest, for you will be woken at approximately 23:00 h."
      },
      {
        day: 5,
        title: " Kibo Hut (4,700 m) – Uhuru Peak (5,895 m) – Horombo Hut (3,700 m)",
        content: "Today is the “big day” – the summit stage. You will start in the middle of the night when the lava ash is still frozen and walking on it is easier. You will begin the long and strenuous trek to the summit in the dark. Passing the Hans Meyer cave at 5,200 m, the climb slowly but surely goes upwards. At sunrise, you will reach Gilman’s Point (5,715 m) on the crater rim. Soon you will have forgotten the cold of the night and after another 1 to 2 hours, you will reach Uhuru Peak at 5,895 m. Now you are standing on the “Roof of Africa”. The descent follows the same path and the lava ash will now have thawed and allows for a fast descent. On your return to Kibo Hut, a warm meal awaits you and you can rest a while to regain your strength. After the 1 to 2 hour break, you will be on your way down to the Horombo Hut (3,700 m) where you will arrive in the afternoon. After an evening meal, it is early to bed for most."
      },
      {
        day: 6,
        title: "Horombo Hut (3,700 m) – Marangu Gate (1,860 m) – Arusha",
        content: "The last stage passes through the heather and moor zone to the Mandara Hut (2,700 m) where a cooked lunch awaits you. Soon you will again be in the lush tropical rain forest and after about 6 hours of trekking, you will be back at the Kilimanjaro National Park gate (1,860 m). After saying goodbye to your mountain crew you will be taken back to the Aquiline Hotel. At the hotel you can have a warm shower and celebrate your success in reaching the summit of Mt Kilimanjaro. You will have dinner and spend the night at the Green Hills of Africa."
      }
      // ... other days
    ]
  },

  {
    id: 'camping-safari',
    title: '4-Days Best Tanzania camping Safari',
    slug: 'camping-safari',
    duration: '6 Days',
    difficulty: 'Moderate',
    image: '/images/klimanjaro.jpg',
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
    
  // ... other tours
];