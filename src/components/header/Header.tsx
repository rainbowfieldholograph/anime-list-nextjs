import clsx from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { DropdownMenu } from '../dropdownMenu/DropdownMenu'
import { IDropdownMenuItem } from '../dropdownMenu/DropdownMenu.props'
import { Search } from '../search/Search'
import styles from './Header.module.scss'
import { HeaderProps } from './Header.props'

const menuItems: IDropdownMenuItem[] = [
  { title: 'asdasdasd', linkTo: 'asdasdasd' },
  { title: 'asdasdasd', linkTo: 'asdasdasd' },
  { title: 'asdasdasd', linkTo: 'asdasdasd' },
  { title: 'Hello', linkTo: 'asdasdasd' },
]

export const Header: FC = ({ className, ...rest }: HeaderProps): JSX.Element => {
  return (
    <header {...rest} className={clsx(styles.header, className)}>
      <Link to="/">
        <h1 className={styles.title}>Anime List</h1>
      </Link>

      <DropdownMenu menuItems={menuItems} className={styles.menu} title="Hello" />
      <Search />
      <a className={styles.button} href="">
        Вход
      </a>
    </header>
  )
}
