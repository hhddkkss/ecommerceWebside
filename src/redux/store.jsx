import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    //key : value
    user: userSlice,
    cart: cartSlice,
  },
})
