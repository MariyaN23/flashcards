import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './personal-information.module.scss'

import ava from '../../../assets/images/avatar.webp'
import edit from '../../../assets/images/edit.svg'
import logout from '../../../assets/images/logout.svg'

type Props = {
  avatar: string
  email: string
  name: string
  onAvatarChange: (newAvatar: string) => void
  onLogout: () => void
  onNameChange: (newName: string) => void
}

export const PersonalInformation = ({
  avatar,
  email,
  name,
  onAvatarChange,
  onLogout,
  onNameChange,
}: Props) => {
  const handleAvatarChanged = () => {
    onAvatarChange('new Avatar')
  }
  const handleNameChanged = () => {
    onNameChange('New name')
  }
  const handleLogout = () => {
    onLogout()
  }

  return (
    <Card>
      <Typography variant={'h1'}>Personal Information</Typography>
      <div className={s.personalContainer}>
        <div className={s.photoContainer}>
          <img alt={'avatar'} className={s.avatar} src={ava} />
          <button className={s.editAvatarButton} onClick={handleAvatarChanged}>
            <img alt={'edit with background'} src={edit} />
          </button>
        </div>
        <div className={s.nameWithEditButton}>
          <Typography className={s.name} variant={'h2'}>
            {name ? name : 'Cat'}
          </Typography>
          <button className={s.editNameButton} onClick={handleNameChanged}>
            <img alt={'edit with background'} src={edit} />
          </button>
        </div>
        <Typography className={s.email} variant={'body2'}>
          {email ? email : 'cat@gmail.com'}
        </Typography>
        <div className={s.buttonContainer}>
          <Button onClick={handleLogout} variant={'secondary'}>
            <img alt={'Logout'} src={logout} />
            Logout
          </Button>
        </div>
      </div>
    </Card>
  )
}
