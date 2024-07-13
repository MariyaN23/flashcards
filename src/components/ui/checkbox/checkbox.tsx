import { ComponentPropsWithoutRef, ElementType } from 'react'

export type ButtonProps<T extends ElementType = 'input'> = {
  as?: T
  label?: string
} & ComponentPropsWithoutRef<T>

import s from './checkbox.module.scss'

export const Checkbox = <T extends ElementType = 'input'>(props: ButtonProps<T>) => {
  return (
    <div className={s.checkbox}>
      <label className={s.label}>
        <input checked={props.checked} disabled={props.disabled} type={'checkbox'} />
        {props.label}
      </label>
    </div>
  )
}
