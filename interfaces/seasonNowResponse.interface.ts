import { IAnime } from './anime.interface'

export interface Pagination {
  last_visible_page: number
  has_next_page: boolean
}

export interface ISeasonNowResponse {
  data: IAnime[]
  pagination: Pagination
}
