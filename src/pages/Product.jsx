import { useState, useEffect } from 'react'
import Carousel from '../components/productsPage/Carousel'
import ProductTypeButton from '../components/productsPage/ProductTypeButton'
import BrandButton from '../components/productsPage/BrandButton'
import TitleAndPath from '../components/productsPage/TitleAndPath'
import FunctionalBar from '../components/productsPage/FunctionalBar'
import ProductDisplay from '../components/productsPage/ProductDisplay'
import Marquee from '../components/productsPage/Marquee'
import SideBar from '../components/productsPage/SideBar'
import axios from 'axios'
import { debounce, sortProducts, searchProduct } from '../utils/prodcutsHelper'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`

const ProductRight = styled.div`
  margin: 0 auto;
`

const Product = () => {
  const [allProducts, setAllProducts] = useState([])
  const [displayProducts, setDisplayProducts] = useState([])
  //第一步 先設定初始一頁要顯示幾個商品 並且給定loadMore為false
  const [visibleProductsAmount, setVisibleProductsAmount] = useState(25)
  const [loadMore, setLoadMore] = useState(false)
  const [keyWord, setKeyWord] = useState(' ')
  const [sortType, setSortType] = useState('上架時間:最新')
  const [sideBarExtend, setSideBarExtend] = useState(false)
  const [brand, setBrand] = useState('')
  const [productType, setProductType] = useState('')

  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:3003/products/pd_api')
      setAllProducts(res.data)
    } catch (error) {
      throw new Error(`因為${error}加載商品資料失敗`)
    }
  }

  const handleOutsideClick = (e) => {
    // 按下sideBar以外的地方 就會收合
    if (!e.target.closest('.sidebar-content') && sideBarExtend) {
      setSideBarExtend(false)
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
    let display = searchProduct(allProducts, keyWord)
    display = sortProducts(display, sortType)
    setDisplayProducts(display)
  }, [allProducts, keyWord, sortType])

  const products = displayProducts.slice(0, visibleProductsAmount)
  const noMoreProducts = visibleProductsAmount > displayProducts.length

  return (
    <>
      <Carousel />
      <Marquee></Marquee>
      <Container onClick={(e) => handleOutsideClick(e)}>
        <SideBar
          sortType={sortType}
          setSortType={setSortType}
          sideBarExtend={sideBarExtend}
          setSideBarExtend={setSideBarExtend}
        ></SideBar>
        <ProductRight>
          <TitleAndPath />
          <FunctionalBar setKeyWord={setKeyWord} />
          <ProductDisplay
            products={products}
            noMoreProducts={noMoreProducts}
          ></ProductDisplay>
        </ProductRight>
      </Container>
    </>
  )
}

export default Product
