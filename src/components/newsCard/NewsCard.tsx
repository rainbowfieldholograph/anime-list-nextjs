import { FC } from 'react'
import { NewsCardProps } from './NewsCard.props'
import styles from './NewsCard.module.scss'
import { Link } from 'react-router-dom'

export const NewsCard: FC<NewsCardProps> = ({
  title,
  image,
  linkTo,
}: NewsCardProps): JSX.Element => {
  return (
    <article className={styles.card}>
      <Link className={styles.inner} to={linkTo}>
        <img className={styles.image} src={image} alt={title} />
        <p className={styles.title}>{title}</p>
      </Link>
    </article>
  )
}
