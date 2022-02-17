import { FC, useEffect } from 'react'
import { PopularNowProps } from './PopularNow.props'
import styles from './PopularNow.module.scss'
import { AnimeTitleCard } from '../animeTitleCard/AnimeTitleCard'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { spacesToDash } from '../../helpers/helpers'
import { fetchPopularNowAnimeTitles } from '../../store/reducers/animeTitlesSlice'
import { Link } from 'react-router-dom'

export const PopularNow: FC = ({}: PopularNowProps): JSX.Element => {
  const animeTitles = useAppSelector((state) => state.animeTitles.animeTitles)
  const dispatch = useAppDispatch()
  let animeCount = 0
  const MAX_ANIME_COUNT = 7

  useEffect(() => {
    dispatch(fetchPopularNowAnimeTitles())
  }, [dispatch])

  return (
    <section className={styles.wrapper}>
      <Link className={styles.headLink} to="">
        Сейчас на экранах
      </Link>
      <ul className={styles.list}>
        {animeTitles.map((anime) => {
          animeCount++
          if (animeCount > MAX_ANIME_COUNT) return
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
    </section>
  )
}
