import React, { ComponentPropsWithoutRef, ElementType, LegacyRef } from 'react'

export type RadioGroupProps<T extends ElementType = 'input'> = {
  as?: T
  label?: string
} & ComponentPropsWithoutRef<T>

import s from './radio-group.module.scss'

export const RadioGroup = React.forwardRef(
  <T extends ElementType = 'input'>(
    props: RadioGroupProps<T>,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <div className={s.radioGroup}>
        <label className={s.label}>
          <input type={'radio'} {...props} ref={ref} />
          {props.label}
        </label>
      </div>
    )
  }
)
