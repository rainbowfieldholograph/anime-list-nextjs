import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchSeasonsNow, selectSeasonsNow } from '../../store/reducers/seasonsNowSlice';
import { PopularNowItemsProps } from './PopularNowItems.props';
import styles from './PopularNowItems.module.scss';
import { AnimeTitleCard } from '../animeTitleCard/AnimeTitleCard';

export const PopularNowItems = ({}: PopularNowItemsProps): JSX.Element => {
  const animeList = useAppSelector(selectSeasonsNow).now;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSeasonsNow());
  }, [dispatch]);

  return (
    <>
      {animeList.map((anime) => {
        return (
          <li key={anime.mal_id}>
            <AnimeTitleCard
              className={styles.item}
              id={anime.mal_id}
              title={anime.title}
              subtitle={anime.studios[0].name}
              image={anime.images.webp.image_url}
              link={`anime/${anime.mal_id}`}
            />
          </li>
        );
      })}
    </>
  );
};
