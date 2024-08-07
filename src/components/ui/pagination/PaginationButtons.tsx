import { Button } from '@/components/ui/button'

import s from './pagination.module.scss'

type PaginationButtonsPropsType = {
  currentPage?: number
  onClick?: (pageNumber: number) => () => void
  pages?: number
}

export const PaginationButtons = (props: PaginationButtonsPropsType) => {
  const paginationRange = [1, 2, 3]

  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        return (
          <Button className={s.paginationButton} key={index}>
            {page}
          </Button>
        )
      })}
    </>
  )
}
