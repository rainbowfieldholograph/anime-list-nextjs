import { FC } from 'react'
import { spacesToDash } from '../../helpers/helpers'
import { AnimeTitlesCarouselProps } from './animeTitlesCarousel.props'
import styles from './animeTitlesCarousel.module.scss'
import { AnimeTitleCard } from '../animeTitleCard/AnimeTitleCard'

export const AnimeTitlesCarousel: FC<AnimeTitlesCarouselProps> = ({
  animeTitles,
  maxCardsCount,
}: AnimeTitlesCarouselProps): JSX.Element => {
  let animeCount = 0
  return (
    <ul className={styles.list}>
      {animeTitles.map((anime) => {
        animeCount++
        if (animeCount > maxCardsCount) return
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
  )
}
