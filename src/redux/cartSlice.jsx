import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  cartItem: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItem(state, action) {
      console.log(action.payload, 'payload')
      state.cartItem = action.payload
    },
  },
})

const fetchCartData = async (member_id) => {
  const res = await axios.get(`http://localhost:3003/cart/api/${member_id}`)

  console.log(res.data.rows, 'res')

  if (!res.data) {
    throw new Error('fetch fail!')
  }
  return res.data.rows
}

//得到購物車資料
export const fetchUserCart = (member_id) => {
  console.log(member_id)
  return async (dispatch) => {
    try {
      const cartData = await fetchCartData(member_id)
      dispatch(cartAction.setCartItem(cartData))
    } catch (error) {
      console.log(error)
    }
  }
}
//新增商品進購物車
export const addItemToCart = (member_id, product_id) => {
  return async (dispatch) => {
    const res = await axios.post('http://localhost:3003/cart/addItem', {
      member_id,
      product_id,
    })

    if (res.data[0].affectedRows !== 1) {
      throw new Error('新增失敗 請重新再試!!')
    }

    try {
      const cartData = await fetchUserCart(member_id)
      dispatch(cartAction.setCartItem(cartData))
    } catch (error) {
      throw new Error(error)
    }
  }
}

//刪除購物車物品
export const deleteItem = (member_id, sid) => {
  return async (dispatch) => {
    const res = await axios.delete(
      `http://localhost:3003/cart/delete_item/${member_id}/${sid}`
    )

    if (res.data[0].affectedRows !== 1) {
      throw new Error('刪除失敗 請重新再試!!')
    }

    try {
      const cartData = await fetchCartData(member_id)
      dispatch(cartAction.setCartItem(cartData))
    } catch (error) {
      throw new Error(error)
    }
  }
}

//商品數量 +1
export const addQuantity = (member_id, sid, quantity) => {
  return async (dispatch) => {
    const res = await axios.put(`http://localhost:3003/cart/plus_quantity`, {
      quantity,
      sid,
      member_id,
    })

    if (res.data[0].affectedRows !== 1) {
      throw new Error('商品新增失敗 請重新再試!!')
    }

    try {
      const cartData = await fetchCartData(member_id)
      dispatch(cartAction.setCartItem(cartData))
    } catch (error) {
      throw new Error(error)
    }
  }
}

//商品數量-1
export const minusQuantity = (member_id, sid, quantity) => {
  return async (dispatch) => {
    const res = await axios.put(`http://localhost:3003/cart/minus_quantity`, {
      member_id,
      quantity,
      sid,
    })

    if (!res.data[0].affectedRows !== 1) {
      throw new Error('商品減少失敗 請重新再試!!')
    }

    try {
      const cartData = await fetchCartData(member_id)
      dispatch(cartAction.setCartItem(cartData))
    } catch (error) {
      throw new Error(error)
    }
  }
}

//清空購物車
export const emptyCart = (member_id) => {
  console.log(`http://localhost:3003/cart/empty_cart/${member_id}`)
  return async (dispatch) => {
    const res = await axios.delete(
      `http://localhost:3003/cart/empty_cart/${member_id}`
    )

    if (res.data[0].affectedRows !== 1) {
      throw new Error('清空購物車失敗 請重新再試!!')
    }

    try {
      const cartData = await fetchCartData(member_id)
      dispatch(cartAction.setCartItem(cartData))
    } catch (error) {
      throw new Error(error)
    }
  }
}

export const cartAction = cartSlice.actions
export default cartSlice.reducer
