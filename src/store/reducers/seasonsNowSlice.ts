import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_BASE_URL } from '../../helpers/api'
import { Anime } from '../../interfaces/anime.interface'
import { LoadingState } from '../../helpers/loadingState.enum'
import { SeasonNowResponse } from '../../interfaces/seasonNowResponse'
import type { RootState } from '../store'

interface SeasonsNowState {
  now: Anime[]
  loading: LoadingState
}

export const fetchSeasonsNow = createAsyncThunk('animeTitles/fetchAnimeTitles', async () => {
  const response = await fetch(`${API_BASE_URL}seasons/now`)
  const data: SeasonNowResponse = await response.json()
  return data.data
})

const initialState: SeasonsNowState = {
  now: [],
  loading: LoadingState.idle,
}

export const seasonsNowSlice = createSlice({
  name: 'seasonsNow',
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

export const {} = seasonsNowSlice.actions

export const selectSeasonsNow = (state: RootState) => state.seasonsNow

export default seasonsNowSlice.reducer
