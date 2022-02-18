import { FC, useEffect } from 'react'
import { PopularNowProps } from './PopularNow.props'
import styles from './PopularNow.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchPopularNowAnimeTitles } from '../../store/reducers/animeTitlesSlice'
import { Link } from 'react-router-dom'
import { AnimeTitlesCarousel } from '../animeTitlesCarousel/animeTitlesCarousel'

export const PopularNow: FC = ({}: PopularNowProps): JSX.Element => {
  const animeTitles = useAppSelector((state) => state.animeTitles.animeTitles)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPopularNowAnimeTitles())
  }, [dispatch])

  return (
    <section className={styles.wrapper}>
      <Link className={styles.headLink} to="">
        Сейчас на экранах
      </Link>
      <AnimeTitlesCarousel animeTitles={animeTitles} />
    </section>
  )
}
