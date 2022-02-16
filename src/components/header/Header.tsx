import clsx from 'clsx'
import { FC } from 'react'
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
      <h1>Anime List React</h1>
      <DropdownMenu menuItems={menuItems} className={styles.menu} title="Hello" />
      <Search />
      <a className={styles.button} href="">
        Вход
      </a>
    </header>
  )
}
