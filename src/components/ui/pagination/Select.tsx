import React, { useState } from 'react'

import ArrowDown from '@/assets/icons/arrow-down'

import s from '@/components/ui/pagination/pagination.module.scss'

const Select = () => {
  const [opened, setOpened] = useState(false)
  const options = ['10', '20', '30', '100']
  const [selectedOption, setSelectedOption] = useState(options[0])

  const openOption = (option: string) => {
    setSelectedOption(option)
    setOpened(false)
  }

  return (
    <div className={s.selectBorder}>
      <div className={s.selectedOptions} onClick={() => setOpened(!opened)}>
        {selectedOption} <ArrowDown />
        {opened && (
          <div className={s.optionItems}>
            {options.map((option, index) => (
              <div className={s.option} key={index} onClick={() => openOption(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Select
