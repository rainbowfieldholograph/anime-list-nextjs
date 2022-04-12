import {  GetStaticProps, NextPage } from 'next';
import { getCurrentSeasonAnimes } from '../helpers/api';
import { HomePage } from '../page-components/HomePage';
import { IAnime } from '../interfaces/anime.interface';

const Home: NextPage<{ currentSeasonAnimes: IAnime[] }> = ({
  currentSeasonAnimes,
}): JSX.Element => {
  return (
    <>
      <HomePage currentSeasonAnimes={currentSeasonAnimes} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const currentSeasonAnimesData = await getCurrentSeasonAnimes();
  return { props: { currentSeasonAnimes: currentSeasonAnimesData } };
};

export default Home;
