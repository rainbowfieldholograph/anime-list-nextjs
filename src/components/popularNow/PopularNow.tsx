import { FC, useEffect } from 'react'
import { PopularNowProps } from './PopularNow.props'
import styles from './PopularNow.module.scss'
import { AnimeTitleCard } from '../animeTitleCard/AnimeTitleCard'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { spacesToDash } from '../../helpers/helpers'
import { fetchAnimeTitles } from '../../store/reducers/animeTitlesSlice'

export const PopularNow: FC = ({}: PopularNowProps): JSX.Element => {
  const animeTitles = useAppSelector((state) => state.animeTitles.animeTitles)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAnimeTitles())
  }, [dispatch])

  console.log(animeTitles)

  return (
    <section className={styles.wrapper}>
      <a className={styles.headLink} href="">
        Сейчас на экранах
      </a>
      <ul className={styles.list}>
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
    </section>
  )
}
