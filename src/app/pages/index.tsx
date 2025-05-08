import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header/Header';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Adventure Tours - Explore the World</title>
        <meta name="description" content="Discover amazing adventure tours around the world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <h1>Welcome to Adventure Tours</h1>
        {/* More content will go here */}
      </main>
    </>
  );
};

export default Home;