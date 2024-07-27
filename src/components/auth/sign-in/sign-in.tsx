import { useForm } from 'react-hook-form'

import s from './sign-in.module.scss'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'

type FormValues = z.infer<typeof loginSchema>

import { Link } from 'react-router-dom'

import { Card } from '@/components/ui/card/card'
import { ControlledCheckbox } from '@/components/ui/checkbox/controlled-checkbox'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

type FormType = z.infer<typeof loginSchema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const SignIn = (props: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit(props.onSubmit)

  return (
    <Card>
      <Typography className={s.title} variant={'large'}>
        Sign In
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
        <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        <Typography
          as={Link}
          className={s.recoverPasswordLink}
          to={'/recover-password'}
          variant={'body2'}
        >
          Forgot Password?
        </Typography>
        <Button fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>
      <Typography className={s.caption} variant={'body2'}>
        {`Don't have an account?`}
      </Typography>
      <Typography as={Link} className={s.signUpLink} to={'/sign-up'} variant={'link1'}>
        Sign Up
      </Typography>
    </Card>
  )
}
