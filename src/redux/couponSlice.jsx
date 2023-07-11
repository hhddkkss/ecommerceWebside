import { createSlice } from '@reduxjs/toolkit'

const initInfo = {
  hasCoupon: false,
  couponName: '',
  couponPrice: 0,
}

const initialState = {
  couponInfo: initInfo,
}

const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    setCouponInfo(state, action) {
      state.couponInfo = action.payload
    },
    clearCouponInfo(state, action) {
      state.couponInfo = initInfo
    },
  },
})

export const { setCouponInfo, clearCouponInfo } = couponSlice.actions
export default couponSlice.reducer
