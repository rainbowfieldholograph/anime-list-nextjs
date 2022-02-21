import { FC } from 'react'
import { HeadLine } from '../headLine/HeadLine'
import { NewsProps } from './RandomContent.props'
import styles from './RandomContent.module.scss'

export const News: FC<NewsProps> = ({}: NewsProps): JSX.Element => {
  return (
    <section>
      <HeadLine className={styles.head}>News</HeadLine>
      <ul className={styles.list}></ul>
    </section>
  )
}
