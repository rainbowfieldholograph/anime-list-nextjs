import { GetServerSideProps, NextPage } from 'next';
import { getAnimeById } from '../../helpers/api';
import { IAnime } from '../../interfaces/anime.interface';
import { AnimeDetailsPage } from '../../page-components/AnimeDetailsPage';

const Anime: NextPage<{ anime: IAnime }> = ({ anime }) => {
  return <AnimeDetailsPage data={anime} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;
  const data = await getAnimeById(String(id));

  if (!data) return { notFound: true };

  return { props: { anime: data } };
};

export default Anime;
