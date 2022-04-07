import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface TooltipProps {
  children: ReactNode
}

export interface TooltipTargetProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface TooltipContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
