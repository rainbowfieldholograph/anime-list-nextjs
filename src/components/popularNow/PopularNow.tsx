import { FC } from 'react';
import { PopularNowProps } from './PopularNow.props';
import styles from './PopularNow.module.scss';
import { Link } from 'react-router-dom';
import { MediaScroller } from '../mediaScroller/MediaScroller';
import { HeadLine } from '../headLine/HeadLine';
import { PopularNowItems } from '../popularNowItems/PopularNowItems';

export const PopularNow: FC = ({}: PopularNowProps): JSX.Element => {
  return (
    <section className={styles.wrapper}>
      <HeadLine>
        <Link className={styles.headLink} to="ws">
          Popular now
        </Link>
      </HeadLine>
      <MediaScroller>
        <PopularNowItems />
      </MediaScroller>
    </section>
  );
};
