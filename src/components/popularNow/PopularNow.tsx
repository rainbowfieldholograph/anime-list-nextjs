import { FC, useEffect } from 'react';
import { PopularNowProps } from './PopularNow.props';
import styles from './PopularNow.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchSeasonsNow, selectSeasonsNow } from '../../store/reducers/seasonsNowSlice';
import { Link } from 'react-router-dom';
import { MediaScroller } from '../mediaScroller/MediaScroller';
import { HeadLine } from '../headLine/HeadLine';

export const PopularNow: FC = ({}: PopularNowProps): JSX.Element => {
  const anime = useAppSelector(selectSeasonsNow).now;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSeasonsNow());
  }, [dispatch]);

  return (
    <section className={styles.wrapper}>
      <HeadLine>
        <Link className={styles.headLink} to="ws">
          Popular now
        </Link>
      </HeadLine>
      <MediaScroller animeTitles={anime} />
    </section>
  );
};
