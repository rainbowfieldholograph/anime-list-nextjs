import { configureStore } from '@reduxjs/toolkit'
import seasonsReducer from './reducers/seasonsSlice'

export const store = configureStore({
  reducer: { seasons: seasonsReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
