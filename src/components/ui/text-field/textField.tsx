import React, { ComponentPropsWithoutRef, ElementType, LegacyRef } from 'react'

export type InputProps<T extends ElementType = 'input'> = {
  as?: any
  className?: string
  errorMessage?: string
  label?: string
  variant?: 'default' | 'search' | 'withIcon'
} & ComponentPropsWithoutRef<T>

import { Typography } from '@/components/ui/typography'

import s from './text-field.module.scss'

export const TextField = React.forwardRef(
  <T extends ElementType = 'input'>(
    props: InputProps<T>,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    const { className, errorMessage, variant = 'default', ...rest } = props

    return (
      <div>
        <Typography as={'label'} className={s.fieldText} variant={'body2'}>
          <span className={s.greyLabel}>{props.label}</span>
          <br />
          <input
            className={`${s.input} ${s[variant]} ${className} ${errorMessage ? s.error : ''}`}
            {...rest}
            ref={ref}
          />
          <Typography variant={'error'}>{errorMessage}</Typography>
        </Typography>
      </div>
    )
  }
)
