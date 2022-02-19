import { FC } from 'react'
import { HeadLine } from '../headLine/HeadLine'
import { NewsProps } from './News.props'
import styles from './News.module.scss'
import { NewsCard } from '../newsCard/NewsCard'

export const News: FC<NewsProps> = ({}: NewsProps): JSX.Element => {
  return (
    <section>
      <HeadLine className={styles.head}>News</HeadLine>
      <ul className={styles.list}>
        <li>
          <NewsCard
            title="sad"
            image="https://cdn.myanimelist.net/images/anime/1989/116577l.jpg"
            linkTo="asdg"
          />
        </li>
        <li>
          <NewsCard
            title="sad"
            image="https://cdn.myanimelist.net/images/anime/1989/116577l.jpg"
            linkTo="asdg"
          />
        </li>
        <li>
          <NewsCard
            title="sad"
            image="https://cdn.myanimelist.net/images/anime/1989/116577l.jpg"
            linkTo="asdg"
          />
        </li>
      </ul>
    </section>
  )
}
