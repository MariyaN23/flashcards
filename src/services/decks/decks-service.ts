import {
  CreateDeckArgs,
  Deck,
  DeckResponse,
  DecksListResponse,
  DeleteDeckArgs,
  GetDeckByIdArgs,
  GetDecksArgs,
  UpdateDeckArgs,
} from '@/services/decks/decks-types'
import { flashcardsApi } from '@/services/flashcards-api'

export const decksService = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDecks: builder.mutation<void, DeleteDeckArgs>({
        invalidatesTags: ['Decks'],
        query: id => ({
          method: 'DELETE',
          url: `v1/decks/${id}`,
        }),
      }),
      getDeckById: builder.query<DeckResponse, GetDeckByIdArgs>({
        query: id => ({
          method: 'GET',
          url: `v1/decks/${id}`,
        }),
      }),
      getDecks: builder.query<DecksListResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          method: 'GET',
          //params: { ...(args ?? {}), name: args?.name || undefined }, т.к. идет name пустой в запросе
          params: args || undefined,
          url: `v2/decks`,
        }),
      }),
      updateDeck: builder.mutation<Deck, UpdateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...body }) => ({
          body,
          method: 'PATCH',
          url: `v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDecksMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useUpdateDeckMutation,
} = decksService
