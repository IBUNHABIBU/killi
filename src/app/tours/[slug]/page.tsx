import { notFound } from 'next/navigation';
import { upcomingTours } from '@/app/data/tour';
import TourDetails from '@/app/components/TourDetails/TourDetails';

type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Generate static paths at build time
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return upcomingTours.map((tour) => ({
    slug: tour.slug,
  }));
}

// Page component for each dynamic tour
export default function Page({ params }: PageProps) {
  const tour = upcomingTours.find((t) => t.slug === params.slug);

  if (!tour) {
    notFound();
  }

  return <TourDetails tour={tour} />;
}
