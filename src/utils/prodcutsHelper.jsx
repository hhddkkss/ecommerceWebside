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

//品牌分類
