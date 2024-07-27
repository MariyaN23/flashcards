import { useForm } from 'react-hook-form'

import { Card } from '@/components/ui/card/card'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './create-password.module.scss'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  password: z.string().min(3),
})

type FormType = z.infer<typeof loginSchema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const CreatePassword = (props: Props) => {
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
        Create new password
      </Typography>
      <form className={s.form} onSubmit={onSubmit}>
        <DevTool control={control} />
        <TextField
          {...register('password')}
          errorMessage={errors.password?.message}
          label={'Password'}
          type={'password'}
          variant={'withIcon'}
        />
        <Typography className={s.caption} variant={'body2'}>
          {`Create new password and we will send you further instructions to email`}
        </Typography>
        <Button fullWidth type={'submit'}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
