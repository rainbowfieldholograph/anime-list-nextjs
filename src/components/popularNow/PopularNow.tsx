import { FC } from 'react'
import { PopularNowProps } from './PopularNow.props'
import styles from './PopularNow.module.scss'
import { AnimeTitleCard } from '../animeTitleCard/AnimeTitleCard'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { spacesToDash } from '../../helpers/helpers'

export const PopularNow: FC = ({}: PopularNowProps): JSX.Element => {
  const animeTitles = useAppSelector((state) => state.animeTitles.animeTitles)
  const dispatch = useAppDispatch()
  return (
    <section className={styles.wrapper}>
      <a className={styles.headLink} href="">
        Сейчас на экранах
      </a>
      <ul className={styles.list}>
        {animeTitles.map((anime) => {
          const computeLink: string = `${anime.id}-${spacesToDash(anime.title)}`
          return <AnimeTitleCard {...anime} link={computeLink} />
        })}
      </ul>
    </section>
  )
}
