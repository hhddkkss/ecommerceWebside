import React, { ReactComponent, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart as FillFaHeart,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as FaHeart } from '@fortawesome/free-regular-svg-icons'
// 要像CRA一樣把svg匯入成component 要在vite.config.js 中 使用 vite-plugin-svgr
import { ReactComponent as CompareButtonBlue } from '../../assets/svg/CompareButtonBlue.svg'
import { ReactComponent as CompareButtonYellow } from '../../assets/svg/CompareButtonYellow.svg'

const ProductCards = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    padding: 0 1rem;
  }
`

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  flex-basis: 230px;
  height: 300px;
  position: relative;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  &:hover {
    box-shadow: 1px 1px 10px #000;
  }
  &:hover > div {
    opacity: 1;
  }
  @media (max-width: 767px) {
    flex-basis: 100%;
  }
`
const ProductCardMask = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  opacity: 0;
  transition: 0.25s ease-in;
  @media (max-width: 767px) {
    opacity: 1;
    background-color: transparent;
  }
`

const ProductTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--deepBlue);
  min-height: 20px;
  color: var(--textColorWhite);
  font-size: 10px;
`
const ProductImageWrap = styled.div`
  min-width: 150px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
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

const ProductPrice = styled.div`
  position: absolute;
  left: 50%;
  bottom: 25%;
  transform: translate(-50%);
  font-size: 16px;
  font-weight: 500;
  &::after {
    content: ' 元';
  }
`

const BottomMsg = styled.p`
  width: 100%;
  color: gray;
  text-align: center;
  margin-bottom: 1rem;
`

const ProductDisplay = ({ products, noMoreProducts }) => {
  return (
    <ProductCards>
      {products.map((product) => {
        return (
          <ProductCard key={product.product_id}>
            <ProductPrice>
              {(+product.product_price).toLocaleString('zh-TW', {
                style: 'currency',
                currency: 'NTD',
                minimumFractionDigits: 0,
              })}
            </ProductPrice>
            <ProductCardMask>
              {/* FIXME: 加入喜歡後 變成實心的愛心 */}
              <FontAwesomeIcon
                icon={FaHeart}
                style={{
                  color: 'var(--deepBlue)',
                  position: 'absolute',
                  top: '30px',
                  right: '10px',
                  cursor: 'pointer',
                  fontSize: '20px',
                }}
              />
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{
                  color: 'var(--deepBlue)',
                  position: 'absolute',
                  bottom: '70px',
                  right: '10px',
                  cursor: 'pointer',
                  fontSize: '20px',
                }}
              />
              <CompareButtonYellow
                style={{
                  position: 'absolute',
                  bottom: '70px',
                  left: '10px',
                  cursor: 'pointer',
                }}
              ></CompareButtonYellow>
            </ProductCardMask>
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

      {noMoreProducts && <BottomMsg>已經到底了，沒有更多商品了～～</BottomMsg>}
    </ProductCards>
  )
}

export default ProductDisplay
