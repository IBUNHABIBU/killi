import { notFound } from 'next/navigation';
import { upcomingTours } from '@/app/data/tour';
import TourDetails from '@/app/components/TourDetails/TourDetails';

interface PageProps {
  params: { slug: string };
}

// This function generates static paths at build time
export async function generateStaticParams() {
  return upcomingTours.map((tour) => ({
    slug: tour.slug,
  }));
}

// This can be async if you need to fetch data
export default function Page({ params }: PageProps) {
  // Find the tour that matches the slug
  const tour = upcomingTours.find((t) => t.slug === params.slug);

  // If no tour is found, return a 404
  if (!tour) {
    notFound();
  }

  // Return the tour details component
  return <TourDetails tour={tour} />;
}