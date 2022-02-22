import { FC } from 'react'
import { TooltipContentProps, TooltipProps, TooltipTargetProps } from './Tooltip.props'
import styles from './Tooltip.module.scss'
import clsx from 'clsx'

export const Tooltip = ({ children }: TooltipProps): JSX.Element => {
  return <div className={styles.tooltip}>{children}</div>
}

export const Target: FC<TooltipTargetProps> = ({
  className,
  children,
  ...rest
}: TooltipTargetProps): JSX.Element => {
  return (
    <div tabIndex={0} className={clsx(styles.target, className)} {...rest}>
      {children}
    </div>
  )
}

export const Content: FC<TooltipContentProps> = ({
  className,
  children,
  ...rest
}: TooltipContentProps): JSX.Element => {
  return (
    <div role="tooltip" className={clsx(styles.content, className)} {...rest}>
      {children}
    </div>
  )
}

Tooltip.Target = Target
Tooltip.Content = Content
