import React, {
  ChangeEvent,
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementType,
  LegacyRef,
  useRef,
  useState,
} from 'react'

import close from '../../../assets/images/close.svg'
import eye from '../../../assets/images/eye.svg'
import eyeOff from '../../../assets/images/eye-off.svg'

export type TextFieldProps<T extends ElementType = 'input'> = {
  as?: any
  className?: string
  errorMessage?: string
  label?: string
  onClearInput?: () => void
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<T>

import Search from '@/assets/icons/Search'
import { Typography } from '@/components/ui/typography'
import { mergeRefs } from '@/utils/merge-refs'
import { clsx } from 'clsx'

import s from './text-field.module.scss'

export const TextField = React.forwardRef(
  <T extends ElementType = 'input'>(
    props: TextFieldProps<T>,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    const [revealPassword, setRevealPassword] = useState(false)
    const { className, errorMessage, onChange, onClearInput, onValueChange, type, ...rest } = props
    const isRevealPasswordButtonShown = type === 'password'
    const finalType = getFinalType(type, revealPassword)
    const handleToggleShowPassword = () => {
      setRevealPassword((prevState: boolean) => !prevState)
    }
    const isSearchField = type === 'search'
    const isClearInputButtonShown = isSearchField
    const internalRef = useRef<HTMLInputElement>(null)
    const finalRef = mergeRefs([ref, internalRef])
    const handleClearInput = () => {
      if (onClearInput) {
        return onClearInput()
      }

      if (!internalRef.current) {
        return
      }
      internalRef.current.value = ''
      onValueChange?.('')
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    const inputClassname = clsx(
      s.input,
      !!errorMessage && s.error,
      isSearchField && s.hasLeadingIcon,
      className
    )

    return (
      <div className={s.root}>
        <Typography as={'label'} className={s.fieldText} variant={'body2'}></Typography>
        <span className={s.greyLabel}>{props.label}</span>
        <br />
        <div className={s.fieldContainer}>
          {isSearchField && (
            <Search className={s.leadingIcon} onClick={() => internalRef.current?.focus()} />
          )}
          <input
            className={inputClassname}
            onChange={handleChange}
            ref={finalRef}
            type={finalType}
            {...rest}
          />
          {isRevealPasswordButtonShown && (
            <button className={s.showpassword} onClick={handleToggleShowPassword} type={'button'}>
              {revealPassword ? (
                <img alt={'eye off'} src={eyeOff} />
              ) : (
                <img alt={'eye'} src={eye} />
              )}
            </button>
          )}
          {isClearInputButtonShown && (
            <button className={s.clearInput} onClick={handleClearInput} type={'button'}>
              <img alt={'close'} src={close} />
            </button>
          )}
        </div>

        <Typography className={s.error} variant={'error'}>
          {errorMessage}
        </Typography>
      </div>
    )
  }
)

function getFinalType(
  type: ComponentProps<'input'>['type'],
  showPassword: boolean
): ComponentProps<'input'>['type'] {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
