import { configureStore } from '@reduxjs/toolkit'
import animeTitlesReducer from './reducers/animeTitlesSlice'

export const store = configureStore({
  reducer: { animeTitles: animeTitlesReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
