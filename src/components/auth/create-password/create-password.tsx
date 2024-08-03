import { useForm } from 'react-hook-form'

import { Card } from '@/components/ui/card/card'
import { ControlledTextField } from '@/components/ui/text-field/controlled-text-field'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './create-password.module.scss'

import { Button } from '../../ui/button'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  password: z.string().min(3),
})

type FormType = z.infer<typeof loginSchema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const CreatePassword = (props: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
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
        <ControlledTextField
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'Password'}
          type={'password'}
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
