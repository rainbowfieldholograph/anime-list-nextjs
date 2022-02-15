// import clsx from 'clsx'
// import { FC, useEffect, useRef } from 'react'
import styles from './DropdownMenu.module.scss'
// import { DropdownMenuProps } from './DropdownMenu.props'

import { FC, useRef } from 'react'
import { DropdownMenuProps } from './DropdownMenu.props'

export const DropdownMenu: FC<DropdownMenuProps> = ({
  menuItems,
  title,
  className,
}: DropdownMenuProps): JSX.Element => {
  const buttonRef = useRef<HTMLElement | null>(null)
  const menuRef = useRef<HTMLDetailsElement | null>(null)

  const openMenu = () => {
    if (!menuRef.current?.hasAttribute('open')) buttonRef.current?.click()
  }

  const closeMenu = () => {
    if (menuRef.current?.hasAttribute('open')) buttonRef.current?.click()
  }

  return (
    <details onMouseLeave={closeMenu} ref={menuRef} className={styles.menu}>
      <summary onMouseEnter={openMenu} ref={buttonRef} className={styles.button}>
        {title}
      </summary>
      <nav>
        <ul className={styles.content}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a className={styles.link} href={item.linkTo}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  )
}
