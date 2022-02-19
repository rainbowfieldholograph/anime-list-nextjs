import { FC, useRef } from 'react'
import { spacesToDash } from '../../helpers/helpers'
import { AnimeTitlesCarouselProps } from './animeTitlesCarousel.props'
import styles from './animeTitlesCarousel.module.scss'
import { AnimeTitleCard } from '../animeTitleCard/AnimeTitleCard'
import clsx from 'clsx'

const JUMP_VALUE: number = 200

export const AnimeTitlesCarousel: FC<AnimeTitlesCarouselProps> = ({
  animeTitles,
}: AnimeTitlesCarouselProps): JSX.Element => {
  const listRef = useRef<null | HTMLUListElement>(null)

  const scroll = (where: 'left' | 'right'): void => {
    const element = listRef.current
    let value = 0
    switch (where) {
      case 'left':
        value = -JUMP_VALUE
        break
      case 'right':
        value = JUMP_VALUE
        break
      default:
        return
    }
    if (element) {
      element.focus()
      element.scrollTo({
        left: element.scrollLeft + value,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => scroll('left')}
        className={clsx(styles.control, styles.controlLeft)}
      >
        {'<'}
      </button>
      <ul tabIndex={-1} className={styles.list} ref={listRef}>
        {animeTitles.map((anime) => {
          const computeLink: string = `${anime.mal_id}-${spacesToDash(anime.title)}`
          return (
            <AnimeTitleCard
              key={anime.mal_id}
              id={anime.mal_id}
              title={anime.title}
              image={anime.images.jpg.image_url}
              link={computeLink}
            />
          )
        })}
      </ul>
      <button
        onClick={() => scroll('right')}
        className={clsx(styles.control, styles.controlRight)}
      >
        {'>'}
      </button>
    </div>
  )
}
