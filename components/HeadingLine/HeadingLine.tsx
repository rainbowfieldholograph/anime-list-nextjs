import { FC } from 'react';
import { HeadingLineProps } from './HeadingLine.props';
import styles from './HeadingLine.module.scss';
import clsx from 'clsx';

export const HeadingLine: FC<HeadingLineProps> = ({
  children,
  className,
  ...rest
}: HeadingLineProps) => {
  return (
    <div className={clsx(styles.headLine, className)} {...rest}>
      {children}
    </div>
  );
};
