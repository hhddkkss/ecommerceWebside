import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

//ReadMe
// dispatch(fetchUserCart(memberId))
// dispatch(addItemToCart(memberId, 102))
// dispatch(addQuantity(memberId, 295, 1))
// dispatch(minusQuantity(memberId, 295, 2))
// dispatch(deleteItem(memberId, 293))
// dispatch(emptyCart(memberId))

const initialState = {
  cartItem: [],
  cartTotalPrice: 0,
  cartInfoModal: false,
  deleteInfoModal: false,
  clickItem: { itemName: 0, itemSid: 0 },
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItem(state, action) {
      state.cartItem = action.payload
    },
    setCartTotalPrice(state, action) {
      state.cartTotalPrice = action.payload
    },
    setCartInfoModalOpen(state, action) {
      state.cartInfoModal = action.payload
    },
    setCartInfoModalClose(state, action) {
      state.cartInfoModal = action.payload
    },
    setCartDeleteInfoModalOpen(state, action) {
      state.deleteInfoModal = action.payload
    },
    setCartDeleteInfoModalClose(state, action) {
      state.deleteInfoModal = action.payload
    },
    setClickItem(state, action) {
      state.clickItem = { ...action.payload }
    },
  },
})

const fetchCartData = async (member_id) => {
  const res = await axios.get(`http://localhost:3003/cart/api/${member_id}`)
  console.log(res, 'res')
  if (!res.data) {
    throw new Error('fetch fail!')
  }

  return res.data.rows
}

//得到購物車資料
export const fetchUserCart = (member_id) => {
  return async (dispatch) => {
    try {
      const cartData = await fetchCartData(member_id)
      dispatch(cartAction.setCartItem(cartData))

      const totalPrice = cartData.reduce(
        (init, item) => init + +item.product_price * +item.quantity,
        0
      )
      dispatch(cartAction.setCartTotalPrice(totalPrice))
    } catch (error) {
      console.log(error)
    }
  }
}
//新增商品進購物車
export const addItemToCart = (member_id, product_id) => {
  return async (dispatch) => {
    try {
      if (!member_id) {
        dispatch(cartAction.setCartInfoModalOpen(true))
        throw new Error('請先登入在進行操作')
      }

      const res = await axios.post('http://localhost:3003/cart/addItem', {
        member_id,
        product_id,
      })

      if (res.data.affectedRows !== 1) {
        throw new Error(res.data)
      }

      const cartData = await fetchCartData(member_id)
      dispatch(cartAction.setCartItem(cartData))

      const totalPrice = cartData.reduce(
        (init, item) => init + +item.product_price * +item.quantity,
        0
      )
      dispatch(cartAction.setCartTotalPrice(totalPrice))
    } catch (error) {
      throw new Error(error)
    }
  }
}

//刪除購物車物品
export const deleteItem = (member_id, sid) => {
  return async (dispatch) => {
    if (!member_id) {
      dispatch(cartAction.setCartInfoModalOpen(true))
      throw new Error('請先登入在進行操作')
    }

    const res = await axios.delete(
      `http://localhost:3003/cart/delete_item/${member_id}/${sid}`
    )

    if (res.data[0].affectedRows !== 1) {
      throw new Error('刪除失敗 請重新再試!!')
    }
    try {
      const cartData = await fetchCartData(member_id)
      dispatch(cartAction.setCartItem(cartData))

      const totalPrice = cartData.reduce(
        (init, item) => init + +item.product_price * +item.quantity,
        0
      )
      dispatch(cartAction.setCartTotalPrice(totalPrice))
    } catch (error) {
      throw new Error(error)
    }
  }
}

//商品數量 +1
export const addQuantity = (member_id, sid, quantity) => {
  return async (dispatch) => {
    try {
      if (!member_id) {
        dispatch(cartAction.setCartInfoModalOpen(true))
        throw new Error('請先登入在進行操作')
      }

      const res = await axios.put(`http://localhost:3003/cart/plus_quantity`, {
        quantity,
        sid,
        member_id,
      })

      if (res.data[0].affectedRows !== 1) {
        throw new Error('商品新增失敗 請重新再試!!')
      }

      const cartData = await fetchCartData(member_id)
      dispatch(cartAction.setCartItem(cartData))

      const totalPrice = cartData.reduce(
        (init, item) => init + +item.product_price * +item.quantity,
        0
      )
      dispatch(cartAction.setCartTotalPrice(totalPrice))
    } catch (error) {
      throw new Error(error)
    }
  }
}

//商品數量-1
export const minusQuantity = (member_id, sid, quantity) => {
  return async (dispatch) => {
    try {
      if (!member_id) {
        dispatch(cartAction.setCartInfoModalOpen(true))
        throw new Error('請先登入在進行操作')
      }

      const res = await axios.put(`http://localhost:3003/cart/minus_quantity`, {
        member_id,
        quantity,
        sid,
      })

      if (res.data[0].affectedRows !== 1) {
        throw new Error('商品減少失敗 請重新再試!!')
      }

      const cartData = await fetchCartData(member_id)
      dispatch(cartAction.setCartItem(cartData))

      const totalPrice = cartData.reduce(
        (init, item) => init + +item.product_price * +item.quantity,
        0
      )
      dispatch(cartAction.setCartTotalPrice(totalPrice))
    } catch (error) {
      throw new Error(error)
    }
  }
}

//清空購物車
export const emptyCart = (member_id) => {
  return async (dispatch) => {
    try {
      if (!member_id) {
        dispatch(cartAction.setCartInfoModalOpen(true))
        throw new Error('請先登入在進行操作')
      }

      const res = await axios.delete(
        `http://localhost:3003/cart/empty_cart/${member_id}`
      )

      if (res.data[0].affectedRows !== 1) {
        throw new Error('清空購物車失敗 請重新再試!!')
      }

      const cartData = await fetchCartData(member_id)
      dispatch(cartAction.setCartItem(cartData))

      const totalPrice = cartData.reduce(
        (init, item) => init + +item.product_price * +item.quantity,
        0
      )
      dispatch(cartAction.setCartTotalPrice(totalPrice))
    } catch (error) {
      throw new Error(error)
    }
  }
}

export const cartAction = cartSlice.actions
export const {
  setCartInfoModalOpen,
  setCartInfoModalClose,
  setCartDeleteInfoModalOpen,
  setCartDeleteInfoModalClose,
  setClickItem,
} = cartSlice.actions
export default cartSlice.reducer
