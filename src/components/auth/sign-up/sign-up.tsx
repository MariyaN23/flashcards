import { useForm } from 'react-hook-form'

import s from './sign-up.module.scss'

import { Button } from '../../ui/button'

type FormValues = z.infer<typeof loginSchema>

import { Link } from 'react-router-dom'

import { Card } from '@/components/ui/card/card'
import { ControlledTextField } from '@/components/ui/text-field/controlled-text-field'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  confirmPassword: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(3),
})

type FormType = z.infer<typeof loginSchema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const SignUp = (props: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit(props.onSubmit)

  return (
    <Card>
      <Typography className={s.title} variant={'large'}>
        Sign Up
      </Typography>
      <form className={s.form} onSubmit={onSubmit}>
        <DevTool control={control} />
        <ControlledTextField
          control={control}
          label={'Email'}
          name={'email'}
          placeholder={'Email'}
        />
        <ControlledTextField
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'Password'}
          type={'password'}
        />
        <ControlledTextField
          control={control}
          label={'Confirm Password'}
          name={'confirmPassword'}
          placeholder={'Confirm password'}
          type={'password'}
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
