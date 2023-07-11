import axios from 'axios'

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
    .get('http://192.168.1.104:3003/products/pd_api')
    .then((response) => {
      let res = response.data
      return res
    })
    .catch((error) => {
      throw new Error(`因為${error}加載商品資料失敗`)
    })
}

//新增待比較的產品進localStorage
export const addToCompareList = (
  itemPid,
  itemName,
  itemPrice,
  ItemPic,
  categoryId
) => {
  // console.log(itemPid, itemName, itemPrice, ItemPic, categoryId)

  if (!localStorage.getItem('myCompareList')) {
    localStorage.setItem(
      'myCompareList',
      JSON.stringify([
        {
          itemPid,
          itemName,
          itemPrice,
          ItemPic,
          categoryId,
        },
      ])
    )
  }

  const compareList =
    localStorage.getItem('myCompareList') &&
    JSON.parse(localStorage.getItem('myCompareList'))

  if (!compareList.find((v) => v.itemPid === itemPid)) {
    const newCompareList = [
      ...compareList,
      { itemPid, itemName, itemPrice, ItemPic, categoryId },
    ]

    localStorage.setItem('myCompareList', JSON.stringify(newCompareList))
  }
}

//刪除localStorage的產品
export const deleteFromCompareList = (itemPid) => {
  if (!localStorage.getItem('myCompareList')) {
    localStorage.setItem('myCompareList', JSON.stringify([]))
  }

  const data = JSON.parse(localStorage.getItem('myCompareList')) || []

  const newData = data.filter((v) => v.itemPid !== itemPid)

  localStorage.setItem('myCompareList', JSON.stringify(newData))
}

//拿到localStorage中加入待比較的所有產品
export function getCompareList() {
  return (
    localStorage.getItem('myCompareList') &&
    JSON.parse(localStorage.getItem('myCompareList'))
  )
}

export const filterByCompareButton = (myCompareList, compareType) => {
  switch (compareType) {
    case '手機':
      return [...myCompareList].filter((v) => v.categoryId == 1)
    case '平板':
      return [...myCompareList].filter((v) => v.categoryId == 2)
    case '耳機':
      return [...myCompareList].filter((v) => v.categoryId == 3)
    default:
      return [...myCompareList].filter((v) => v.categoryId == 1)
  }
}

//比較產品
export const fetchComparingDetails = async (compareIngList, compareType) => {
  return await axios
    .post('http://192.168.1.104:3003/product_compare/compareIng', {
      compareIngList,
      compareType,
    })
    .then((response) => {
      let res = response.data
      return res
    })
    .catch((e) => {
      throw new Error(`因為${e}加載商品資料失敗`)
    })
}

export const addToComparing = (itemPid) => {
  if (!localStorage.getItem('comparing')) {
    localStorage.setItem('comparing', JSON.stringify([itemPid]))
  }

  const comparing =
    localStorage.getItem('comparing') &&
    JSON.parse(localStorage.getItem('comparing'))

  const length = comparing.length || 0

  if (!comparing.find((v) => v === itemPid) && length < 3) {
    const newCompareList = [...comparing, itemPid]

    localStorage.setItem('comparing', JSON.stringify(newCompareList))
  }
  // console.log('最多只能新增三項商品')
}

export const getComparing = () => {
  return (
    localStorage.getItem('comparing') &&
    JSON.parse(localStorage.getItem('comparing'))
  )
}

export const deleteFromComparing = (itemPid) => {
  if (!localStorage.getItem('comparing')) {
    localStorage.setItem('comparing', JSON.stringify([]))
  }

  const data = JSON.parse(localStorage.getItem('comparing')) || []

  const newData = data.filter((v) => v !== itemPid)

  localStorage.setItem('comparing', JSON.stringify(newData))
}
