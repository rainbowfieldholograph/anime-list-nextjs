import { FC, useRef } from 'react';
import { AnimeTitlesCarouselProps } from './MediaScroller.props';
import styles from './MediaScroller.module.scss';
import { AnimeTitleCard } from '../animeTitleCard/AnimeTitleCard';
import clsx from 'clsx';

const JUMP_VALUE: number = 200;

export const MediaScroller: FC<AnimeTitlesCarouselProps> = ({
  animeTitles,
}: AnimeTitlesCarouselProps): JSX.Element => {
  const listRef = useRef<null | HTMLUListElement>(null);

  const scroll = (where: 'left' | 'right'): void => {
    const element = listRef.current;
    let value = 0;
    switch (where) {
      case 'left':
        value = -JUMP_VALUE;
        break;
      case 'right':
        value = JUMP_VALUE;
        break;
      default:
        return;
    }
    if (element) {
      element.focus();
      element.scrollTo({
        left: element.scrollLeft + value,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => scroll('left')}
        className={clsx(styles.control, styles.controlLeft)}
      >
        {'<'}
      </button>
      <ul tabIndex={0} className={styles.scroller} ref={listRef}>
        {animeTitles.map((anime) => {
          return (
            <AnimeTitleCard
              className={styles.mediaElement}
              key={anime.mal_id}
              id={anime.mal_id}
              title={anime.title}
              subtitle={anime.studios[0].name}
              image={anime.images.webp.image_url}
              link={`anime/${anime.mal_id}`}
            />
          );
        })}
      </ul>
      <button
        onClick={() => scroll('right')}
        className={clsx(styles.control, styles.controlRight)}
      >
        {'>'}
      </button>
    </div>
  );
};
