import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import Navigation from "./components/Navigation/Navigation";
import { Hero } from "./components/Hero/Hero";
import { CampingSection } from "./components/CampingSection/CampingSection";
import { DiscoverSection } from "./components/DiscoverSection/DiscoverSection";
import { ToursSection } from "./components/TourSection/TourSection";
import { TestimonialSection } from "./components/TestimonialSection/TestimonialSection";
import { SpecialOffers } from "./components/SpecialOffers/SpecialOffers";

export default function Home() {
  return (
    <div className={styles.page}>
     <Head>
        <title>Adventure Tourism | Explore the World</title>
        <meta name="description" content="Discover amazing adventures with our tourism services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>
      <Hero />
      <CampingSection />
      <DiscoverSection />
      <ToursSection />
      <TestimonialSection />
      <SpecialOffers />
      </main>
      <footer className={styles.footer}>
    Footer
      </footer>
    </div>
  );
}
