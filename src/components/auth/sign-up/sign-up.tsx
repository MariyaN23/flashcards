import { useForm } from 'react-hook-form'

import s from './sign-up.module.scss'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'

type FormValues = z.infer<typeof loginSchema>

import { Link } from 'react-router-dom'

import { Card } from '@/components/ui/card/card'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  confirmPassword: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(3),
})

export const SignUp = () => {
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
    <Card>
      <Typography className={s.title} variant={'large'}>
        Sign Up
      </Typography>
      <form className={s.form} onSubmit={onSubmit}>
        <DevTool control={control} />
        <TextField {...register('email')} errorMessage={errors.email?.message} label={'Email'} />
        <TextField
          {...register('password')}
          errorMessage={errors.password?.message}
          label={'Password'}
          type={'password'}
          variant={'withIcon'}
        />
        <TextField
          {...register('confirmPassword')}
          errorMessage={errors.confirmPassword?.message}
          label={'Confirm Password'}
          type={'password'}
          variant={'withIcon'}
        />
        <Button fullWidth type={'submit'}>
          Sign Up
        </Button>
      </form>
      <Typography className={s.caption} variant={'body2'}>
        {`Already have an account?`}
      </Typography>
      <Typography as={Link} className={s.signInLink} to={'/sign-in'} variant={'link1'}>
        Sign In
      </Typography>
    </Card>
  )
}
