import { FC } from 'react'
import searchIcon from '../../imgs/search.svg'
import { SearchProps } from './Search.props'
import styles from './Search.module.scss'

export const Search: FC = ({}: SearchProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.inner}>
        <input placeholder="Поиск..." className={styles.input} type="search" />
        <img className={styles.icon} width={30} height={30} src={searchIcon} alt="" />
      </label>
    </div>
  )
}
