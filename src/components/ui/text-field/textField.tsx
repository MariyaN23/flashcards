import React, { LegacyRef } from 'react'

export type InputProps = {
  as?: any
  className?: string
  error?: boolean
  label?: string
  variant?: 'default' | 'search' | 'withIcon'
}

import s from './text-field.module.scss'

export const TextField = React.forwardRef(
  (props: InputProps, ref: LegacyRef<HTMLInputElement> | undefined) => {
    const { className, error, variant = 'default', ...rest } = props

    return (
      <div>
        <label>
          {props.label}
          <input
            className={`${s.input} ${s[variant]} ${className} ${error ? s.error : ''}`}
            {...rest}
            ref={ref}
          />
        </label>
      </div>
    )
  }
)
