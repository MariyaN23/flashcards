import { ComponentPropsWithoutRef, ElementType } from 'react'

export type InputProps<T extends ElementType = 'input'> = {
  as?: T
  error?: boolean
  variant?: 'default' | 'search' | 'withIcon'
} & ComponentPropsWithoutRef<T>

import s from './input.module.scss'

export const Input = <T extends ElementType = 'input'>(props: InputProps<T>) => {
  const { as: Component = 'input', className, error, variant = 'default', ...rest } = props

  return (
    <Component
      className={`${s.input} ${s[variant]} ${className} ${error ? s.error : ''}`}
      {...rest}
    />
  )
}
