import { useForm } from 'react-hook-form'

import s from './forgot-password.module.scss'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'

type FormValues = z.infer<typeof loginSchema>

import { Link } from 'react-router-dom'

import { Card } from '@/components/ui/card/card'
import { Typography } from '@/components/ui/typography'
import { Link1 } from '@/components/ui/typography/typography.stories'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
})

export const ForgotPassword = () => {
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
        Forgot your password?
      </Typography>
      <form className={s.form} onSubmit={onSubmit}>
        <DevTool control={control} />
        <TextField {...register('email')} errorMessage={errors.email?.message} label={'Email'} />
        <Typography className={s.caption} variant={'body2'}>
          {`Enter your email address and we will send you further instructions`}
        </Typography>
        <Button fullWidth type={'submit'}>
          Send Instructions
        </Button>
      </form>
      <Typography className={s.caption} variant={'body2'}>
        {`Did you remember your password?`}
      </Typography>
      <Typography as={Link} className={s.loginLink} to={'/sign-in'} variant={'link1'}>
        Try logging in
      </Typography>
    </Card>
  )
}
