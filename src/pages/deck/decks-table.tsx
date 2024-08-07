import { Table } from '@/components/ui/table'
import { TableBody } from '@/components/ui/table/table-components/table-body'
import { TableCell } from '@/components/ui/table/table-components/table-cell'
import { TableHeader } from '@/components/ui/table/table-components/table-header/table-header'
import { TableRow } from '@/components/ui/table/table-components/table-row'
import { Deck } from '@/services/decks/decks-types'

type DecksTablePropsType = {
  decks: Deck[] | undefined
}

export const DecksTable = ({ decks }: DecksTablePropsType) => {
  return (
    <Table>
      <TableHeader
        columns={[
          { key: 'name', title: 'Name' },
          { key: 'cards', title: 'Cards' },
          { key: 'last updated', title: 'Last updated' },
          { key: 'author', title: 'Author' },
        ]}
      />
      <TableBody>
        {decks?.map(deck => {
          const updatedAt = new Date(deck.updated).toLocaleDateString('ru-RU')

          return (
            <TableRow key={deck.id}>
              <TableCell>{deck.name}</TableCell>
              <TableCell>{deck.cardsCount}</TableCell>
              <TableCell>{updatedAt}</TableCell>
              <TableCell>{deck.author.name}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
