import clsx from 'clsx'
import { FC } from 'react'
import styles from './Footer.module.scss'
import { FooterProps } from './Footer.props'

export const Footer: FC<FooterProps> = ({ className, ...rest }: FooterProps): JSX.Element => {
  return (
    <footer className={clsx(styles.footer, className)} {...rest}>
      2022
    </footer>
  )
}
