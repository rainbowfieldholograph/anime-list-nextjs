import { configureStore } from '@reduxjs/toolkit'
import seasonsNowReducer from './reducers/seasonsNowSlice'

export const store = configureStore({
  reducer: { seasonsNow: seasonsNowReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
