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
        content: 'After breakfast at the hotel you will be taken to the Kilimanjaro National Park gate...'
      },
      // ... other days
    ]
  },
  // ... other tours
];