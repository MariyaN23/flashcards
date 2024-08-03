import { useForm } from 'react-hook-form'

import s from './forgot-password.module.scss'

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
  email: z.string().email(),
})

type FormType = z.infer<typeof loginSchema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const ForgotPassword = (props: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit(props.onSubmit)

  return (
    <Card>
      <Typography className={s.title} variant={'large'}>
        Forgot your password?
      </Typography>
      <form className={s.form} onSubmit={onSubmit}>
        <DevTool control={control} />
        <ControlledTextField
          control={control}
          label={'Email'}
          name={'email'}
          placeholder={'Email'}
        />
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
