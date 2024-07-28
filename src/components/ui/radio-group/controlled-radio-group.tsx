export type ControlledRadioGroupProps<TFieldValues extends FieldValues> = Omit<
  RadioGroupProps,
  'id' | 'onChange' | 'value'
> &
  UseControllerProps<TFieldValues>

import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radio-group/radio-group'

export const ControlledRadioGroup = <TFieldValues extends FieldValues>(
  props: ControlledRadioGroupProps<TFieldValues>
) => {
  const {
    field: { onChange, ...field },
    fieldState: { error },
  } = useController({
    control: props.control,
    name: props.name,
  })

  return (
    <RadioGroup
      {...props}
      {...field}
      errorMessage={error?.message}
      id={props.name}
      onValueChange={onChange}
    />
  )
}
