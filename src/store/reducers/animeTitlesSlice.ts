import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAnimeTitle } from '../../interfaces/AnimeTitle.interface'
import type { RootState } from '../store'

interface AnimeTitlesState {
  animeTitles: IAnimeTitle[]
}

const initialState: AnimeTitlesState = {
  animeTitles: [
    {
      id: 0,
      title: 'attack on titans',
      image: 'https://desu.shikimori.one/system/animes/preview/48583.jpg?1644196833',
    },
  ],
}

export const animeTitlesSlice = createSlice({
  name: 'animeTitles',
  initialState,
  reducers: {},
})

export const {} = animeTitlesSlice.actions

export const selectAnimeTitle = (state: RootState) => state.animeTitles

export default animeTitlesSlice.reducer
