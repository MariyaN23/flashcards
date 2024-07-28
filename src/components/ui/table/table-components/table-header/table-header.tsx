import { ComponentPropsWithoutRef, FC } from 'react'

import { TableHead } from '@/components/ui/table/table-components/table-header/table-head'
import { TableHeadCell } from '@/components/ui/table/table-components/table-header/table-head-cell'
import { TableRow } from '@/components/ui/table/table-components/table-row'

export type Column = {
  key: string
  sortable?: boolean
  title: string
}
export type Sort = {
  direction: 'asc' | 'desc'
  //asc - по возрастанию, desc - по убыванию
  key: string
} | null

export const TableHeader: FC<
  Omit<
    {
      columns: Column[]
      onSort?: (sort: Sort) => void
      sort?: Sort
    } & ComponentPropsWithoutRef<'thead'>,
    'children'
  >
> = ({ columns, onSort, sort, ...restProps }) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) {
      return
    }

    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }

    if (sort.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }

  return (
    <TableHead {...restProps}>
      <TableRow>
        {columns.map(({ key, sortable = true, title }) => (
          <TableHeadCell key={key} onClick={handleSort(key, sortable)}>
            {title}
            {sort && sort.key === key && <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>}
          </TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
