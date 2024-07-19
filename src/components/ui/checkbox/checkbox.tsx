import React, { ComponentPropsWithoutRef, ElementType, LegacyRef } from 'react'

export type CheckboxProps<T extends ElementType = 'input'> = {
  as?: T
  label?: string
} & ComponentPropsWithoutRef<T>

import s from './checkbox.module.scss'

export const Checkbox = React.forwardRef(
  <T extends ElementType = 'input'>(
    props: CheckboxProps<T>,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <div className={s.checkbox}>
        <label className={s.label}>
          <input type={'checkbox'} {...props} ref={ref} />
          {props.label}
        </label>
      </div>
    )
  }
)
