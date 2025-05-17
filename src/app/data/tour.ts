export interface Tour {
  id: string;
  title: string;
  slug: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  highlights: string[];
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
        content: ""
      },
      {
        day: 6,
        title: "",
        content: ""
      }
      // ... other days
    ]
  },
  // ... other tours
];