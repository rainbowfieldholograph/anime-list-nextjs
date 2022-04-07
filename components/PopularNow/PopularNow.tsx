import { PopularNowProps } from './PopularNow.props';
import styles from './PopularNow.module.scss';
import { MediaScroller } from '../MediaScroller/MediaScroller';
import { HeadingLine } from '../HeadingLine';
import Link from 'next/link';
import { AnimeTitleCard } from '../AnimeTitleCard';

export const PopularNow = ({ data }: PopularNowProps): JSX.Element => {
  return (
    <section aria-label="Popular now" className={styles.wrapper}>
      <HeadingLine>
        <Link href="/ws" passHref>
          <a className={styles.headLink}>Popular Now</a>
        </Link>
      </HeadingLine>
      <MediaScroller>
        {data.map((anime) => {
          return (
            <li key={anime.mal_id}>
              <AnimeTitleCard
                className={styles.item}
                id={anime.mal_id}
                title={anime.title}
                subtitle={anime.studios.at(0)?.name ?? 'no data'}
                image={anime.images.webp.image_url}
                link={`animes/${anime.mal_id}`}
              />
            </li>
          );
        })}
      </MediaScroller>
    </section>
  );
};
