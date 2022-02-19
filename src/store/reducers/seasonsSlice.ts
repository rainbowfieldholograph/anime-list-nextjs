import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_BASE_URL } from '../../helpers/api'
import { Anime } from '../../interfaces/anime.interface'
import { LoadingState } from '../../helpers/loadingState.enum'
import { SeasonNowResponse } from '../../interfaces/seasonNowResponse'
import type { RootState } from '../store'

interface SeasonsState {
  now: Anime[]
  loading: LoadingState
}

export const fetchSeasonsNow = createAsyncThunk('animeTitles/fetchAnimeTitles', async () => {
  const response = await fetch(`${API_BASE_URL}seasons/now`)
  const data: SeasonNowResponse = await response.json()
  return data.data
})

const initialState: SeasonsState = {
  now: [],
  loading: LoadingState.idle,
}

export const seasonsSlice = createSlice({
  name: 'seasons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSeasonsNow.pending, (state, action) => {
      state.loading = LoadingState.pending
    }),
      builder.addCase(fetchSeasonsNow.fulfilled, (state, action) => {
        state.loading = LoadingState.succeeded
        state.now = action.payload
      })
  },
})

export const {} = seasonsSlice.actions

export const selectSeasonsNow = (state: RootState) => state.seasons

export default seasonsSlice.reducer
