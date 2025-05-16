import { Tour } from './tour';

export const maranguTour: Tour = {
  id: 'marangu-6days',
  title: '6 DAYS MARANGU ROUTE',
  duration: '6 Days',
  difficulty: 'Moderate',
  description: 'The Marangu route is perhaps the easiest and most comfortable route to reach the summit of Mt Kilimanjaro. The route is well-developed and the climb is constant and moderate.',
  price: 1800,
  highlights: [
    'Mountain hut accommodation',
    'Professional English-speaking guide',
    'Acclimatization day at Zebra Rocks',
    'All national park fees included',
    'Extra oxygen cylinder provided'
  ],
  included: [
    'Kilimanjaro trekking according to the itinerary',
    'Professional, English-speaking guide',
    'Mountain crew (cook & porters)',
    'Overnight stays in hotels and mountain huts',
    'Meals according to the itinerary'
  ],
  excluded: [
    'Sleeping bag',
    'Flights',
    'Alcoholic and soft drinks',
    'Visa fees',
    'Tips'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arusha – Marangu Gate – Mandara Hut',
      description: 'Hike through dense rainforest to Mandara Hut (2,700 m) with possible colobus monkey sightings.'
    },
    // Add all 6 days following the same pattern
  ],
  imageUrl: '/images/tours/marangu-route.jpg'
};