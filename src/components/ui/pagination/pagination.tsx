import { ArrowButton } from '@/components/ui/pagination/arrow-button'

export type PaginationProps = {
  onChange?: (page: number) => void
  page?: number
}

import { PaginationButtons } from '@/components/ui/pagination/PaginationButtons'
import Select from '@/components/ui/pagination/Select'

import s from './pagination.module.scss'

export const Pagination = (props: PaginationProps) => {
  return (
    <div className={s.selectPageNumber}>
      <ArrowButton buttonType={'left'} />
      <PaginationButtons />
      <ArrowButton buttonType={'right'} />
      <span>Показать</span>
      <Select />
      <span> на странице</span>
    </div>
  )
}
