import ArrowBack from '@/assets/icons/arrow-back'
import ArrowForward from '@/assets/icons/arrow-forward'
import { Button } from '@/components/ui/button'

import s from './pagination.module.scss'

type ArrowButtonPropsType = {
  buttonType: 'left' | 'right'
  disabled?: boolean
  onClick?: () => void
}

export const ArrowButton = (props: ArrowButtonPropsType) => {
  return (
    <Button className={s.arrowButton} disabled={props.disabled} onClick={props.onClick}>
      {props.buttonType === 'left' ? <ArrowBack /> : <ArrowForward />}
    </Button>
  )
}
