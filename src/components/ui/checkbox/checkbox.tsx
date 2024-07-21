import React, { ComponentPropsWithoutRef, ElementType, LegacyRef } from 'react'

export type CheckboxProps<T extends ElementType = 'input'> = {
  as?: T
  label?: string
} & ComponentPropsWithoutRef<T>

import { Typography } from '@/components/ui/typography'

import s from './checkbox.module.scss'

export const Checkbox = React.forwardRef(
  <T extends ElementType = 'input'>(
    props: CheckboxProps<T>,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <div className={s.checkbox}>
        <Typography as={'label'} className={s.label} variant={'body2'}>
          <input type={'checkbox'} {...props} ref={ref} />
          {props.label}
        </Typography>
      </div>
    )
  }
)
