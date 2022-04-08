import { FC } from 'react';
import { AnimeTitleCardProps } from './AnimeTitleCard.props';
import styles from './AnimeTitleCard.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import imageLoader from '../../image-loader';

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
      <Link href={link} passHref>
        <a className={styles.link}>
          <div className={styles.imageWrapper}>
            <Image
              loader={imageLoader}
              unoptimized
              width="200"
              height="250"
              src={image}
              alt={title}
              placeholder="empty"
            />
          </div>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </a>
      </Link>
    </article>
  );
};
