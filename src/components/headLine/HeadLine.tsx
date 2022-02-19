import { FC } from 'react'
import { HeadLineProps } from './HeadLine.props'
import styles from './HeadLine.module.scss'
import clsx from 'clsx'

export const HeadLine: FC<HeadLineProps> = ({
  children,
  className,
  ...rest
}: HeadLineProps): JSX.Element => {
  return (
    <div className={clsx(styles.headLine, className)} {...rest}>
      {children}
    </div>
  )
}
