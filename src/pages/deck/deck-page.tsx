import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/text-field'
import { ControlledTextField } from '@/components/ui/text-field/controlled-text-field'
import { DecksTable } from '@/pages/deck/decks-table'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/decks/decks-service'

export const DecksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') ?? ''
  const handleSearchParams = (value: string) => {
    if (value.length) {
      searchParams.set('search', value)
    } else {
      searchParams.delete('search')
    }
    setSearchParams(searchParams)
  }

  const [itemsPerPage, setItemsPerPage] = useState(10)
  const { data, error, isLoading } = useGetDecksQuery({
    itemsPerPage,
    name: search,
  })

  const { control, handleSubmit } = useForm<{ name: string }>({
    defaultValues: {
      name: '',
    },
  })
  const onSubmit = handleSubmit(data => {
    createDeck(data)
  })

  const [createDeck] = useCreateDeckMutation()

  //нужна авторизация и id
  //const [updateDeck] = useUpdateDeckMutation()
  //const [deleteDeck] = useDeleteDecksMutation()

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
        onValueChange={handleSearchParams}
        type={'search'}
        value={search}
      />
      <select onChange={e => setItemsPerPage(+e.currentTarget.value)} value={itemsPerPage}>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
      <form onSubmit={onSubmit}>
        <ControlledTextField control={control} label={'New deck name'} name={'name'} />
        <Button>Create Deck</Button>
      </form>
      <DecksTable decks={data?.items} />
    </div>
  )
}
