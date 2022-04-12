import '../styles/globals.css';
import '../styles/null.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Anime List Next</title>
        <meta name="description" content="Anime List, created with NextJS and Jinkan API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
