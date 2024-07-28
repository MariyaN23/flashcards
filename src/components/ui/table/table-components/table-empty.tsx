import { ComponentProps, FC } from 'react'

import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from '../table.module.scss'

import empty from '../../../../assets/images/empty.webp'

export const TableEmpty: FC<{ mb?: string; mt?: string } & ComponentProps<'div'>> = ({
  className,
  mb,
  mt = '89px',
}) => {
  const classNames = clsx(className, s.empty)

  return (
    <>
      <Typography className={classNames} style={{ marginBottom: mb, marginTop: mt }} variant={'h2'}>
        Пока тут еще нет данных! :(
      </Typography>
      <img alt={'empty'} height={'300px'} src={empty} width={'300px'} />
    </>
  )
}
