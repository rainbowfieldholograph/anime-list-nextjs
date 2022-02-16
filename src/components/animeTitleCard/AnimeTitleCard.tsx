import { FC } from 'react'
import { AnimeTitleCardProps } from './AnimeTitleCard.props'
import styles from './AnimeTitleCard.module.scss'
import { Link } from 'react-router-dom'

export const AnimeTitleCard: FC<AnimeTitleCardProps> = ({
  id,
  title,
  image,
  link,
}: AnimeTitleCardProps): JSX.Element => {
  return (
    <Link to={link} className={styles.card}>
      <img src={image} alt={title} />
      <p className={styles.title}>{title}</p>
    </Link>
  )
}
