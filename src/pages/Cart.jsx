import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchUserCart,
  addItemToCart,
  addQuantity,
  minusQuantity,
  deleteItem,
  emptyCart,
} from '../redux/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const { memberId } = useSelector((state) => state.user.profile)
  const cartItem = useSelector((state) => state.cart.cartItem)

  // dispatch(fetchUserCart(memberId))
  // dispatch(addItemToCart(memberId, 101))
  // dispatch(addQuantity(memberId, 295, 1))
  // dispatch(minusQuantity(memberId, 295, 2))
  // dispatch(deleteItem(memberId, 293))
  // dispatch(emptyCart(memberId))

  return <div>Cart</div>
}

export default Cart
