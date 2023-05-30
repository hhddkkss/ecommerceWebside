import { useState, useEffect } from 'react'
import Carousel from '../components/productsPage/Carousel'
import ProductTypeButton from '../components/productsPage/ProductTypeButton'
import BrandButton from '../components/productsPage/BrandButton'
import TitleAndPath from '../components/productsPage/TitleAndPath'
import FunctionalBar from '../components/productsPage/FunctionalBar'
import ProductDisplay from '../components/productsPage/ProductDisplay'
import Marquee from '../components/productsPage/Marquee'
import axios from 'axios'
import { debounce } from '../utils/prodcutsHelper'

//排序
const sort = (arr, sortType) => {
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
const search = (arr, keyword) => {
  const regex = new RegExp(keyword, 'gi')
  return [...arr].filter((item) => item.product_name.match(regex))
}
//商品分類

//品牌分類

const Product = () => {
  const [allProducts, setAllProducts] = useState([])
  const [displayProducts, setDisplayProducts] = useState([])
  //第一步 先設定初始一頁要顯示幾個商品 並且給定loadMore為false
  const [visibleProductsAmount, setVisibleProductsAmount] = useState(25)
  const [loadMore, setLoadMore] = useState(false)
  const [keyWord, setKeyWord] = useState(' ')
  const [sortType, setSortType] = useState('上架時間:最新')

  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:3003/products/pd_api')
      setAllProducts(res.data)
    } catch (error) {
      throw new Error(`因為${error}加載商品資料失敗`)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  //第二步  scrollTop + clientHeight = scrollHeight (現在頁面的高度)
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight - 200) {
      setLoadMore(true)
    }
  }

  //第三步 使用useEffect 偵聽scroll事件
  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll))
  }, [])

  //第四步 當loadMore的值改變時 要增加顯示的商品數量
  useEffect(() => {
    if (loadMore) {
      setVisibleProductsAmount((prev) => prev + 25)
      setLoadMore(false)
    }
  }, [loadMore])

  useEffect(() => {
    let display = search(allProducts, keyWord)
    display = sort(display, sortType)
    setDisplayProducts(display)
  }, [allProducts, keyWord, sortType])

  const products = displayProducts.slice(0, visibleProductsAmount)
  const noMoreProducts = visibleProductsAmount > displayProducts.length

  return (
    <>
      <Carousel />
      <Marquee></Marquee>
      <ProductTypeButton />
      <BrandButton />
      <TitleAndPath />
      <FunctionalBar
        setKeyWord={setKeyWord}
        sortType={sortType}
        setSortType={setSortType}
      />
      <ProductDisplay
        products={products}
        noMoreProducts={noMoreProducts}
      ></ProductDisplay>
    </>
  )
}

export default Product
