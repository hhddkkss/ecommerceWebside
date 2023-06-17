import styled from '@emotion/styled'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
// 要像CRA一樣把svg匯入成component 要在vite.config.js 中 使用 vite-plugin-svgr
import { ReactComponent as CompareButtonYellow } from '../../assets/svg/CompareButtonYellow.svg'
import Grid from '@mui/material/Grid'
import { Box, Alert, Snackbar } from '@mui/material'
import { addToCompareList, getCompareList } from '../../utils/productsHelper'
import CompareContext from '../../context/CompareContext'
import { useContext, useState } from 'react'

const ProductCards = styled(Box)`
  max-width: 1200px;

  filter: ${({ sideBarExtend }) => sideBarExtend && 'blur(5px)'};
  @media screen and (max-width: 600px) {
    //加上NavigationPanel的距離
    padding-bottom: 56px;
  }
`

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  &:hover {
    box-shadow: 1px 1px 10px #000;
  }
  &:hover > div {
    opacity: 1;
  }

  @media screen and (max-width: 600px) {
    /* padding-left: 1rem;
    padding-right: 1rem; */
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
  z-index: 3;

  @media screen and (max-width: 600px) {
    padding-left: 1rem;
    padding-right: 1rem;
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
  min-height: 200px;
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
  min-width: 120px;
  width: 100%;
  text-align: center;
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

const ProductDisplay = ({ products, noMoreProducts, sideBarExtend }) => {
  const { myCompareList, setMyCompareList } = useContext(CompareContext)

  const [msgOpen, setMsgOpen] = useState(false)

  const handleMsgOpen = () => {
    setMsgOpen(true)
  }

  const handleMsgClose = () => {
    setMsgOpen(false)
  }

  const handleAddToCompareList = (
    itemPid,
    itemName,
    itemPrice,
    ItemPic,
    categoryId
  ) => {
    //加入比較列表的物件
    addToCompareList(itemPid, itemName, itemPrice, ItemPic, categoryId)
    //從localStorage 拿到最新的資料
    const newCompareList = getCompareList()
    setMyCompareList(newCompareList)
    //提示訊息
    handleMsgOpen()
  }

  return (
    <ProductCards
      sideBarExtend={sideBarExtend}
      sx={{
        width: {
          xl: '1200px',
          lg: '1200px',
          md: '900px',
          sm: '600px',
          xs: '90%',
        },
        margin: '0 auto',
      }}
    >
      <Snackbar
        open={msgOpen}
        autoHideDuration={1000}
        onClose={handleMsgClose}
        style={{
          width: '300px',
          position: 'fixed',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Alert
          onClose={handleMsgClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          商品成功加入比較列表!
        </Alert>
      </Snackbar>

      <Grid container spacing={2} mb={2}>
        {products.map((product) => {
          return (
            <Grid
              item
              key={product.product_id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2.4}
            >
              <ProductCard>
                <ProductPrice>
                  {(+product.product_price).toLocaleString('zh-TW', {
                    style: 'currency',
                    currency: 'NTD',
                    minimumFractionDigits: 0,
                  })}
                </ProductPrice>
                <ProductCardMask>
                  {/* NOTE: 加入喜歡後 變成實心的愛心 */}
                  <FavoriteBorderOutlinedIcon
                    style={{
                      color: 'var(--deepBlue)',
                      position: 'absolute',
                      top: '30px',
                      right: '10px',
                      cursor: 'pointer',
                      fontSize: '20px',
                    }}
                  />
                  <ShoppingCartOutlinedIcon
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
                    onClick={() =>
                      handleAddToCompareList(
                        product.product_id,
                        product.product_name,
                        product.product_price,
                        product.product_pic.split(',')[0],
                        product.product_category_id
                      )
                    }
                  ></CompareButtonYellow>
                </ProductCardMask>
                <ProductTitle>BeE. Selected</ProductTitle>
                <ProductImageWrap>
                  <ProductImage
                    src={'/images/' + product.product_pic.split(',')[0]}
                  ></ProductImage>
                </ProductImageWrap>
                <ProductName>{product.product_name}</ProductName>
              </ProductCard>
            </Grid>
          )
        })}
      </Grid>
      {noMoreProducts && <BottomMsg>已經到底了，沒有更多商品了～～</BottomMsg>}
    </ProductCards>
  )
}

export default ProductDisplay
