export interface Tour {
  id: string;
  title: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  description: string;
  price: number;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  imageUrl: string;
}