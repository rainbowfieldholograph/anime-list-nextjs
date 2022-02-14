import { FC } from 'react'
import { DropdownMenu } from '../dropdownMenu/DropdownMenu'
import { IDropdownMenuItem } from '../dropdownMenu/DropdownMenu.props'
import { Search } from '../search/Search'
import styles from './Header.module.scss'

const menuItems: IDropdownMenuItem[] = [
  { title: 'asdasdasd', linkTo: 'asdasdasd' },
  { title: 'asdasdasd', linkTo: 'asdasdasd' },
  { title: 'asdasdasd', linkTo: 'asdasdasd' },
  { title: 'Hello', linkTo: 'asdasdasd' },
]

export const Header: FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1>Anime List React</h1>
      <nav>
        <DropdownMenu menuItems={menuItems} className={styles.menu} title="Hello" />
      </nav>
      <Search />
      <a href="">Вход</a>
    </header>
  )
}
