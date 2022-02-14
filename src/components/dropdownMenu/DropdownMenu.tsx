import clsx from 'clsx'
import { FC, useEffect, useRef } from 'react'
import styles from './DropdownMenu.module.scss'
import { DropdownMenuProps } from './DropdownMenu.props'

let currentLinkIndex = -1
let maxLinksCount = 0

const changeCurrentLinkIndex = (value: number) => {
  let newValue = currentLinkIndex + value
  if (newValue > maxLinksCount) return (currentLinkIndex = 0)
  if (newValue < 0) return (currentLinkIndex = maxLinksCount)
  currentLinkIndex += value
}

export const DropdownMenu: FC<DropdownMenuProps> = ({
  title,
  className,
  menuItems,
}: DropdownMenuProps): JSX.Element => {
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])

  const focusCurrentLink = () => linkRefs.current[currentLinkIndex]?.focus()

  const handleKeyboardKey = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'ArrowUp':
        event.preventDefault()
        console.log('up')
        changeCurrentLinkIndex(-1)
        focusCurrentLink()
        break
      case 'ArrowDown':
        event.preventDefault()
        console.log('down')
        changeCurrentLinkIndex(1)
        focusCurrentLink()
        break
    }
  }

  useEffect(() => {
    maxLinksCount = menuItems.length - 1
    window.addEventListener('keydown', (event) => handleKeyboardKey(event))
    return () => removeEventListener('keydown', handleKeyboardKey)
  }, [])

  const mouseEnterFocus = (index: number): void => {
    currentLinkIndex = index
    focusCurrentLink()
  }

  return (
    <nav className={styles.dropdown}>
      <div
        tabIndex={0}
        onBlur={() => (currentLinkIndex = -1)}
        className={clsx(styles.button, className)}
      >
        {title}
      </div>
      <ul className={styles.content}>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <a
              className={styles.item}
              href={menuItem.linkTo}
              ref={(ref) => (linkRefs.current[index] = ref)}
              onMouseEnter={() => mouseEnterFocus(index)}
              tabIndex={-1}
            >
              {menuItem.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
