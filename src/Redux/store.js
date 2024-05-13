import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/slice/counterSlice'

export const store = configureStore({
  reducer: {
    phone_accessories: counterReducer
  },
})