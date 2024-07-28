import React from 'react'

import { RadioGroupItem } from '@/components/ui/radio-group/radio-group-item/radio-group-item'
import { RadioGroupRoot } from '@/components/ui/radio-group/radio-group-item/radio-group-root'
import { Typography } from '@/components/ui/typography'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

type Option = {
  label: string
  value: string
}
export type RadioGroupProps = {
  errorMessage?: string
  options: Option[]
} & Omit<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>, 'children'>
export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>((props, ref) => {
  const { errorMessage, options, ...restProps } = props

  return (
    <RadioGroupRoot {...restProps} ref={ref}>
      {options.map(option => (
        <div className={s.label} key={option.value}>
          <RadioGroupItem id={option.value} value={option.value} />
          <Typography as={'label'} htmlFor={option.value} variant={'body2'}>
            {option.label}
          </Typography>
        </div>
      ))}
    </RadioGroupRoot>
  )
})
