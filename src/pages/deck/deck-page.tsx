import React, { useState } from 'react'

import { Pagination } from '@/components/ui/pagination'
import { TextField } from '@/components/ui/text-field'
import { DecksTable } from '@/pages/deck/decks-table'
import { useGetDecksQuery } from '@/services/flashcards-api'

export function DecksPage() {
  const [search, setSearch] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const { data, error, isLoading } = useGetDecksQuery({
    itemsPerPage,
    name: search,
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <div>
      <TextField
        label={'Search'}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)}
        type={'search'}
        value={search}
      />
      <Pagination />
      <DecksTable decks={data?.items} />
    </div>
  )
}
