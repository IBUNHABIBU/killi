import { notFound } from 'next/navigation';
import { dayTrips } from '@/app/data/tour';
import TourDetails from '@/app/components/TourDetails/TourDetails';

// Updated interface for Next.js 15+
interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateStaticParams() {
  return dayTrips.map((tour) => ({
    slug: tour.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  // Await the params Promise
  const { slug } = await params;
  const tour = dayTrips.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }
  
  return <TourDetails tour={tour} />;
}