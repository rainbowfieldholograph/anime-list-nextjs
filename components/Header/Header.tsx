import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import { DropdownMenu } from '../DropdownMenu';
import { Search } from '../Search';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

const menuItems = [
  { title: 'asdasdasd', linkTo: '/asdasdasd' },
  { title: 'asdasdasd', linkTo: '/asdasdasd' },
  { title: 'asdasdasd', linkTo: '/asdasdasd' },
  { title: 'Hello', linkTo: '/asdasdasd' },
];

export const Header: FC = ({ className, ...rest }: HeaderProps): JSX.Element => {
  return (
    <header {...rest} className={clsx(styles.header, className)}>
      <Link href="/" passHref>
        <a>
          <h1 className={styles.title}>Anime List</h1>
        </a>
      </Link>
      <DropdownMenu menuItems={menuItems} className={styles.menu} title="アニメ Anime" />
      <Search />
      <a className={styles.button} href="">
        Вход
      </a>
    </header>
  );
};
