import { ComponentPropsWithoutRef } from 'react'

export type ButtonProps = {
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>

import s from './button.module.scss'

export const Button = ({ className, fullWidth, variant = 'primary', ...rest }: ButtonProps) => {
  return (
    <button
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      type={'button'}
      {...rest}
    />
  )
}
