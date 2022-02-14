import { ReactNode } from 'react'

export interface DropdownMenuProps {
  className?: string
  title: string
  menuItems: IDropdownMenuItem[]
}

export interface IDropdownMenuItem {
  title: string
  linkTo: string
}
