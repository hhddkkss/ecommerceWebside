import { useState, useEffect } from 'react'
import Carousel from '../components/productsPage/Carousel'
import ProductTypeButton from '../components/productsPage/ProductTypeButton'
import BrandButton from '../components/productsPage/BrandButton'
import TitleAndPath from '../components/productsPage/TitleAndPath'
import FunctionalBar from '../components/productsPage/FunctionalBar'
import ProductDisplay from '../components/productsPage/ProductDisplay'
import Marquee from '../components/productsPage/Marquee'
import axios from 'axios'

const Product = () => {
  const [allProducts, setAllProducts] = useState([])

  const getProducts = () => {
    return axios
      .get('http://localhost:3003/products/pd_api')
      .then((res) => {
        setAllProducts(res.data)
      })
      .catch((e) => {
        throw new Error(`因為${e}加載商品資料失敗`)
      })
  }

  useEffect(() => {
    getProducts()
  }, [])

  //第一步 先設定初始一頁要顯示幾個商品 並且給定loadMore為false
  const [visibleProductsAmount, setVisibleProductsAmount] = useState(25)
  const [loadMore, setLoadMore] = useState(false)

  //第二步  scrollTop + clientHeight = scrollHeight (現在頁面的高度)
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      setLoadMore(true)
    }
  }

  //第三步 使用useEffect 偵聽scroll事件
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  //第四步 當loadMore的值改變時 要增加顯示的商品數量
  useEffect(() => {
    if (loadMore) {
      setVisibleProductsAmount((prev) => prev + 25)
      setLoadMore(false)
    }
  }, [loadMore])

  const productDisplay = allProducts.slice(0, visibleProductsAmount)
  const noMoreProducts = visibleProductsAmount > allProducts.length

  return (
    <>
      <Carousel />
      <Marquee></Marquee>
      <ProductTypeButton />
      <BrandButton />
      <TitleAndPath />
      <FunctionalBar />
      <ProductDisplay
        productDisplay={productDisplay}
        noMoreProducts={noMoreProducts}
      ></ProductDisplay>
    </>
  )
}

export default Product
