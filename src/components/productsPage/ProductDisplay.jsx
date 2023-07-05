import styled from '@emotion/styled'
import Grid from '@mui/material/Grid'
import { Alert, Box, Snackbar } from '@mui/material'
import { useState } from 'react'
import ProductCard from './ProductCard'

const ProductCards = styled.div`
  max-width: 1200px;

  filter: ${({ sideBarExtend }) => sideBarExtend && 'blur(5px)'};
  @media screen and (max-width: 600px) {
    //加上NavigationPanel的距離
    padding-bottom: 56px;
  }
`

const BottomMsg = styled.p`
  width: 100%;
  color: gray;
  text-align: center;
  margin-bottom: 1rem;
`

const ProductDisplay = ({ products, noMoreProducts, sideBarExtend }) => {
  const [msgOpen, setMsgOpen] = useState(false)

  const handleMsgOpen = () => {
    setMsgOpen(true)
  }

  const handleMsgClose = () => {
    setMsgOpen(false)
  }

  return (
    <ProductCards
      sideBarExtend={sideBarExtend}
      sx={{
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
      <Box sx={{ paddingLeft: { xs: 2, sm: 0 } }}>
        <Grid
          container
          spacing={2}
          mb={2}
          sx={{
            width: {
              xl: '1200px',
              lg: '1200px',
              md: '900px',
              sm: '600px',
              xs: '100%',
            },
          }}
        >
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
                <ProductCard product={product} handleMsgOpen={handleMsgOpen} />
              </Grid>
            )
          })}
        </Grid>
      </Box>

      {noMoreProducts && <BottomMsg>已經到底了，沒有更多商品了～～</BottomMsg>}
    </ProductCards>
  )
}

export default ProductDisplay
