import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Anime, Response } from '../../interfaces/response.interface'
import type { RootState } from '../store'

interface AnimeTitlesState {
  animeTitles: Anime[]
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export const fetchAnimeTitles = createAsyncThunk('animeTitles/fetchAnimeTitles', async () => {
  const response = await fetch('https://api.jikan.moe/v4/top/anime')
  const data: Response = await response.json()
  return data.data
})

const initialState: AnimeTitlesState = {
  animeTitles: [],
  loading: 'idle',
}

export const animeTitlesSlice = createSlice({
  name: 'animeTitles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAnimeTitles.pending, (state, action) => {
      state.loading = 'pending'
    }),
      builder.addCase(fetchAnimeTitles.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.animeTitles = action.payload
      })
  },
})

export const {} = animeTitlesSlice.actions

export const selectAnimeTitle = (state: RootState) => state.animeTitles

export default animeTitlesSlice.reducer
