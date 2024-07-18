import { useForm } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'

import s from './login-form.module.scss'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'

type FormValues = z.infer<typeof loginSchema>

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <DevTool control={control} />
      <TextField {...register('email')} errorMessage={errors.email?.message} label={'Email'} />
      <TextField
        {...register('password')}
        errorMessage={errors.password?.message}
        label={'Password'}
      />
      <Checkbox {...register('rememberMe')} label={'Remember me'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
