import styles from './DropdownMenu.module.scss';
import { useRef } from 'react';
import { DropdownMenuProps } from './DropdownMenu.props';
import clsx from 'clsx';
import Link from 'next/link';

export const DropdownMenu = ({
  menuItems,
  title,
  className,
}: DropdownMenuProps): JSX.Element => {
  const buttonRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDetailsElement | null>(null);

  const openMenu = () => {
    if (!menuRef.current?.hasAttribute('open')) buttonRef.current?.click();
  };

  const closeMenu = () => {
    if (menuRef.current?.hasAttribute('open')) buttonRef.current?.click();
  };

  return (
    <details onMouseLeave={closeMenu} ref={menuRef} className={clsx(styles.menu, className)}>
      <summary onMouseEnter={openMenu} ref={buttonRef} className={styles.button}>
        {title}
      </summary>
      <nav>
        <ul className={styles.content}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.linkTo} passHref>
                <a className={styles.link}>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
};
