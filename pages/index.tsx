import Head from 'next/head';
import { HomePage } from '../page-components/HomePage';

export const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Anime List Next</title>
        <meta name="description" content="Anime List, created with NextJS and Jinkan API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
