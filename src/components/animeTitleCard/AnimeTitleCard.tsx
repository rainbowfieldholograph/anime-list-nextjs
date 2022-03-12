import { FC } from 'react';
import { AnimeTitleCardProps } from './AnimeTitleCard.props';
import styles from './AnimeTitleCard.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export const AnimeTitleCard: FC<AnimeTitleCardProps> = ({
  id,
  title,
  subtitle,
  image,
  link,
  className,
  ...rest
}: AnimeTitleCardProps): JSX.Element => {
  return (
    <article className={clsx(styles.card, className)} {...rest}>
      <Link className={styles.link} to={link}>
        <img src={image} alt={title} />
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </Link>
    </article>
  );
};
