import { useState, useEffect } from 'react'
import Carousel from '../components/home/Carousel'
import TitleAndPath from '../components/productsPage/TitleAndPath'
import FunctionalBar from '../components/productsPage/FunctionalBar'
import ProductDisplay from '../components/productsPage/ProductDisplay'
import Marquee from '../components/home/Marquee'
import SideBar from '../components/productsPage/SideBar'
import { Box } from '@mui/material'
import {
  debounce,
  sortProducts,
  searchProduct,
  filterProductByProductType,
  filterProductByBrand,
  fetchProducts,
} from '../utils/prodcutsHelper'
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
  const [brand, setBrand] = useState('全部品牌')
  const [productType, setProductType] = useState(0)

  const getMyProduct = () =>
    fetchProducts()
      .then((res) => setAllProducts(res))
      .catch((e) => {
        throw new Error(e)
      })

  const handleOutsideClick = (e) => {
    // 按下sideBar以外的地方 就會收合
    if (!e.target.closest('.sidebar-content') && sideBarExtend) {
      setSideBarExtend(false)
    }
  }

  useEffect(() => {
    getMyProduct()
  }, [])

  //第二步  scrollTop + clientHeight = scrollHeight (現在頁面的高度)
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight - 300) {
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
    //關鍵字篩選
    let display = searchProduct(allProducts, keyWord)
    //商品排序
    display = sortProducts(display, sortType)
    //商品類別篩選
    display = filterProductByProductType(display, productType)
    //品牌篩選
    display = filterProductByBrand(display, brand)
    setDisplayProducts(display)
  }, [allProducts, keyWord, sortType, productType, brand])

  const products = displayProducts.slice(0, visibleProductsAmount)
  const noMoreProducts = visibleProductsAmount > displayProducts.length

  //產品類別變更：品牌變為全部 關鍵字重置 顯示商品數重置
  useEffect(() => {
    setBrand('全部品牌')
    setKeyWord('')
    setVisibleProductsAmount(25)
  }, [productType])

  //品牌變更：關鍵字重置 顯示商品數重置
  useEffect(() => {
    setKeyWord('')
    setVisibleProductsAmount(25)
  }, [brand])

  return (
    <Box onClick={(e) => handleOutsideClick(e)}>
      {/* <Carousel sideBarExtend={sideBarExtend} />
      <Marquee sideBarExtend={sideBarExtend}></Marquee> */}
      <SideBar
        sortType={sortType}
        setSortType={setSortType}
        sideBarExtend={sideBarExtend}
        setSideBarExtend={setSideBarExtend}
        setBrand={setBrand}
        setProductType={setProductType}
      ></SideBar>
      <Container>
        <ProductRight>
          <TitleAndPath
            sideBarExtend={sideBarExtend}
            brand={brand}
            productType={productType}
          />
          <FunctionalBar
            setKeyWord={setKeyWord}
            sideBarExtend={sideBarExtend}
          />
          <ProductDisplay
            products={products}
            noMoreProducts={noMoreProducts}
            sideBarExtend={sideBarExtend}
          ></ProductDisplay>
        </ProductRight>
      </Container>
    </Box>
  )
}

export default Product
