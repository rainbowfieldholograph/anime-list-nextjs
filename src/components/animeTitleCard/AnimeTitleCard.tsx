import { FC } from 'react'
import { AnimeTitleCardProps } from './AnimeTitleCard.props'
import styles from './AnimeTitleCard.module.scss'

export const AnimeTitleCard: FC<AnimeTitleCardProps> = ({
  id,
  title,
  image,
  link,
}: AnimeTitleCardProps): JSX.Element => {
  return (
    <a href={link} className={styles.card}>
      <img src={image} alt={title} />
      <p className={styles.title}>{title}</p>
    </a>
  )
}
