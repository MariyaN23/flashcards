import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children?: ReactNode
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

import { clsx } from 'clsx'

import s from './button.module.scss'

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props
  const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

  return <Component className={classNames} {...rest} />
}
