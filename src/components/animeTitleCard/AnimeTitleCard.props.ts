import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface AnimeTitleCardProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'id'> {
  id: number
  title: string
  image: string
  link: string
  subtitle: string
}
