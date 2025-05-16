import { GetStaticPaths, GetStaticProps } from 'next';
import { upcomingTours } from '@/app/data/tour';
import TourDetails from '@/app/components/TourDetails/TourDetails';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = upcomingTours.map((tour) => ({
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