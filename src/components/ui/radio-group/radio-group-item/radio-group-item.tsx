import React from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from '../radio-group.module.scss'

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ children, className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item className={clsx(s.item, className)} ref={ref} {...props}>
      <div className={s.icon}></div>
    </RadioGroupPrimitive.Item>
  )
})
