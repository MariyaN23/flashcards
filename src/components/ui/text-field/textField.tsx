import React, { LegacyRef } from 'react'

export type InputProps = {
  as?: any
  className?: string
  errorMessage?: string
  label?: string
  variant?: 'default' | 'search' | 'withIcon'
}

import s from './text-field.module.scss'

export const TextField = React.forwardRef(
  (props: InputProps, ref: LegacyRef<HTMLInputElement> | undefined) => {
    const { className, errorMessage, variant = 'default', ...rest } = props

    return (
      <div>
        <label>
          {props.label}
          <input
            className={`${s.input} ${s[variant]} ${className} ${errorMessage ? s.error : ''}`}
            {...rest}
            ref={ref}
          />
          <p>{errorMessage}</p>
        </label>
      </div>
    )
  }
)
