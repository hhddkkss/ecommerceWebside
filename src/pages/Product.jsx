import { useState, useEffect } from 'react'
import Carousel from '../components/productsPage/Carousel'
import ProductTypeButton from '../components/productsPage/ProductTypeButton'
import BrandButton from '../components/productsPage/BrandButton'
import TitleAndPath from '../components/productsPage/TitleAndPath'
import FunctionalBar from '../components/productsPage/FunctionalBar'
import ProductDisplay from '../components/productsPage/ProductDisplay'
import axios from 'axios'

const Product = () => {
  const [products, setProducts] = useState([])

  const getProducts = () => {
    return axios
      .get('http://localhost:3003/products/pd_api')
      .then((res) => {
        setProducts(res.data)
      })
      .catch((e) => {
        throw new Error(`${e}`)
      })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Carousel />
      <ProductTypeButton />
      <BrandButton />
      <TitleAndPath />
      <FunctionalBar />
      <ProductDisplay products={products}></ProductDisplay>
    </>
  )
}

export default Product
