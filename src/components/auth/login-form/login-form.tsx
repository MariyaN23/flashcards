import { useController, useForm } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'

import s from './login-form.module.scss'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { handleSubmit, register } = useForm<FormValues>()

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <TextField {...register('email')} label={'Email'} />
      <TextField {...register('password')} label={'Password'} />
      <Checkbox {...register('rememberMe')} label={'Remember me'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
