import { notFound } from 'next/navigation';
import { upcomingTours } from '@/app/data/tour';
import TourDetails from '@/app/components/TourDetails/TourDetails';

// Use this exact interface
type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  return upcomingTours.map((tour) => ({
    slug: tour.slug,
  }));
}

export default function TourPage({ params }: Props) {
  const tour = upcomingTours.find((t) => t.slug === params.slug);
  
  if (!tour) {
    notFound();
  }

  return <TourDetails tour={tour} />;
}