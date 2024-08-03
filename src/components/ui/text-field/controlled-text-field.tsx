import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui/text-field/textField'

export type ControlledTextFieldProps<TFieldValues extends FieldValues> = Omit<
  TextFieldProps,
  'id' | 'onChange' | 'value'
> &
  UseControllerProps<TFieldValues>

export const ControlledTextField = <TFieldValues extends FieldValues>({
  control,
  name,
  ...textFieldProps
}: ControlledTextFieldProps<TFieldValues>) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <TextField
      {...{
        id: name,
        onChange,
        value,
        ...textFieldProps,
      }}
      errorMessage={error?.message}
    />
  )
}
