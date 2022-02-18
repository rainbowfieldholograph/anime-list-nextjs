import { Anime } from './anime.interface'

export interface Pagination {
  last_visible_page: number
  has_next_page: boolean
}

export interface SeasonNowResponse {
  data: Anime[]
  pagination: Pagination
}
