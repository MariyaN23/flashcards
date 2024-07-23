import { BrowserRouter, Link } from 'react-router-dom'

import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './check-email.module.scss'

import { Button } from '../../ui/button'
import mail from './../../../assets/images/email.png'

type CheckEmailPropsType = {
  email: string
}

export const CheckEmail = ({ email }: CheckEmailPropsType) => {
  const message = `We’ve sent an Email with instructions to ${email}`

  return (
    <BrowserRouter>
      <Card>
        <Typography className={s.title} variant={'large'}>
          Check Email
        </Typography>
        <img alt={'Email'} src={mail} />
        <Typography className={s.caption} variant={'body2'}>
          {message}
        </Typography>
        <Button as={Link} fullWidth to={'/sing-in'}>
          Back to Sign in
        </Button>
      </Card>
    </BrowserRouter>
  )
}
