export interface DecksListResponse {
  items: Deck[]
  maxCardsCount: number
  pagination: Pagination
}

interface Pagination {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export interface Deck {
  author: Author
  cardsCount: number
  cover?: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

interface Author {
  id: string
  name: string
}

export interface GetDecksArgs {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export interface CreateDeckArgs {
  cover?: string
  isPrivate?: boolean // default - false
  name: string
}

export type UpdateDeckArgs = { id: string } & Partial<CreateDeckArgs>

export type DeleteDeckArgs = { id: string }

export type DeckResponse = Deck

export type GetDeckByIdArgs = { id: string }
