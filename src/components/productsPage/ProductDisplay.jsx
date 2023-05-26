import React from 'react'
import styled from '@emotion/styled'

const ProductCards = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 1rem;
`
//FIXME: 最後面的商品分成兩邊需要修正
const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  /* flex-basis: 23%; */
  flex-basis: 280px;
  height: 300px;
`

const ProductTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--deepBlue);
  min-height: 30px;
  color: var(--textColorWhite);
`
const ProductImageWrap = styled.div`
  min-width: 150px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #b7b7b7; */
`
const ProductImage = styled.img`
  width: 120px;
  aspect-ratio: 1/1;
`

const ProductName = styled.div`
  min-height: 60px;
  padding: 0.5rem;
  text-align: center;
  color: var(--textColorWhite);
  background: var(--deepBlue);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const ProductDisplay = ({ products }) => {
  return (
    <ProductCards>
      {products.map((product) => {
        return (
          <ProductCard key={product.product_id}>
            <ProductTitle>BeE. Selected</ProductTitle>
            <ProductImageWrap>
              <ProductImage
                src={'images/' + product.product_pic.split(',')[0]}
              ></ProductImage>
            </ProductImageWrap>
            <ProductName>{product.product_name}</ProductName>
          </ProductCard>
        )
      })}
    </ProductCards>
  )
}

export default ProductDisplay
