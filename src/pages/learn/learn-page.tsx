import { useParams } from 'react-router-dom'

import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useGetDeckByIdQuery } from '@/services/decks/decks-service'

export const LearnPage = () => {
  const { deckId } = useParams()
  const { data: deckData } = useGetDeckByIdQuery({ id: deckId || '' })

  return (
    <Card>
      <Typography variant={'h1'}>Learn {deckData?.name}</Typography>
    </Card>
  )
}
