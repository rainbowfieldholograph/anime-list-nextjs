import { FC } from 'react'
import { AnimeTitleCardProps } from './AnimeTitleCard.props'
import styles from './AnimeTitleCard.module.scss'
import { Link } from 'react-router-dom'

export const AnimeTitleCard: FC<AnimeTitleCardProps> = ({
  id,
  title,
  subtitle,
  image,
  link,
}: AnimeTitleCardProps): JSX.Element => {
  return (
    <article className={styles.card}>
      <Link className={styles.link} to={link}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} />
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </Link>
    </article>
  )
}
