import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

let initialState = {
  products: [],
}

const fetchProductData = async () => {
  const res = await axios.get('http://192.168.1.104:3003/products/pd_api')

  if (res.data.length === 0) {
    throw new Error('取得商品資料失敗')
  }

  return res.data
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct(state, action) {
      //[{},{},{}...]
      state.products = action.payload
    },
  },
})

export const getProduct = () => {
  return async (dispatch) => {
    try {
      const productData = await fetchProductData()
      dispatch(productAction.setProduct(productData))
    } catch (error) {
      throw new Error(error)
    }
  }
}

export const productAction = productSlice.actions
export default productSlice.reducer
