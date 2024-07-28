import React from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from '../radio-group.module.scss'

export const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={clsx(s.root, className)} {...props} ref={ref} />
})
