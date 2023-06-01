import axios from 'axios'

export function debounce(func, delay = 250) {
  let timer = null

  return function (...args) {
    let context = this

    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

//排序
export const sortProducts = (arr, sortType) => {
  switch (sortType) {
    case '價格:由高到低':
      return [...arr].sort((a, b) => b.product_price - a.product_price)
    case '價格:由低至高':
      return [...arr].sort((a, b) => a.product_price - b.product_price)
    case '上架時間:最舊':
      return [...arr].reverse()
    default:
      return [...arr]
  }
}

//搜尋
export const searchProduct = (arr, keyword) => {
  const regex = new RegExp(keyword, 'gi')
  return [...arr].filter((item) => item.product_name.match(regex))
}
//商品分類

export const filterProductByProductType = (arr, productType) => {
  if (productType === 0) return arr
  return [...arr].filter((item) => item.product_category_id === productType)
}

//品牌分類
const otherBrand = [5, 8, 1, 9, 2, 10, 7]
export const filterProductByBrand = (arr, brand) => {
  switch (brand) {
    case '全部品牌':
      return arr.map((v) => v)
    case 'Apple':
      return arr.filter((v) => v.brand_category_id === 5)
    case 'Samsung':
      return arr.filter((v) => v.brand_category_id === 8)
    case 'Asus':
      return arr.filter((v) => v.brand_category_id === 1)
    case 'Oppo':
      return arr.filter((v) => v.brand_category_id === 9)
    case '小米':
      return arr.filter((v) => v.brand_category_id === 2)
    case 'Sony':
      return arr.filter((v) => v.brand_category_id === 10)
    case 'Realme':
      return arr.filter((v) => v.brand_category_id === 7)
    case '其他品牌':
      return arr.filter((v) => !otherBrand.includes(v.brand_category_id))

    default:
      return arr.map((v) => v)
  }
}

export const fetchProducts = async () => {
  return await axios
    .get('http://localhost:3003/products/pd_api')
    .then((response) => {
      let res = response.data
      return res
    })
    .catch((error) => {
      throw new Error(`因為${error}加載商品資料失敗`)
    })
}
