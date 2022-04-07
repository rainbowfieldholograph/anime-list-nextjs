import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface FooterProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'children'
  > {}
