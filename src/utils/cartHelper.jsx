import axios from 'axios'

export const fetchCartData = async (member_id) => {
  return await axios
    .get(`http://192.168.1.104:3003/cart/api/${member_id}`)
    .then((response) => {
      const res = response.data.rows
      return res
    })
    .catch((e) => {
      throw new Error(`因為${e}沒有辦法讀取會員購物車`)
    })
}

export const AddCartItem = () => {}
