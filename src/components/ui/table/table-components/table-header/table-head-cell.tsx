import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from '../../table.module.scss'

export const TableHeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ children, className, ...rest }, ref) => {
    const classNames = clsx(className, s.headCell)

    return (
      <th className={classNames} {...rest} ref={ref}>
        <span>{children}</span>
      </th>
    )
  }
)
