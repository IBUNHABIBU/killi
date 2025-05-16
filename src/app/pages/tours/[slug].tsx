import { GetStaticPaths, GetStaticProps } from 'next';
import TourDetails from '@/components/TourDetails'; // We'll create this next
import UpcomingTours from '@/app/components/UpcomingTours/UpcomingTours';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = UpcomingTours.map((tour) => ({
    params: { slug: tour.slug }
  }));
  
  return {
    paths,
    fallback: false // Shows 404 if not found
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tour = upcomingTours.find((t) => t.slug === params?.slug);
  
  if (!tour) {
    return {
      notFound: true
    };
  }

  return {
    props: { tour }
  };
};

const TourPage = ({ tour }: { tour: Tour }) => {
  return <TourDetails tour={tour} />;
};

export default TourPage;