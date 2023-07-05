import { fetchPopularProduct } from '../../utils/homeHelper'
import {
  Box,
  CardMedia,
  Typography,
  Card,
  Grid,
  useMediaQuery,
} from '@mui/material'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useEffect, useState } from 'react'
import { useTheme } from '@emotion/react'
import PopularProductCard from './PopularProductCard'
import CarouselProductCard from './CarouselProductCard'

const PopularProduct = () => {
  const theme = useTheme()
  const [popularProductData, setPopularProductData] = useState([])

  const getMyPopularProduct = () =>
    fetchPopularProduct()
      .then((res) => setPopularProductData(res))
      .catch((e) => {
        throw new Error(e)
      })

  const isMobile = useMediaQuery(theme.breakpoints.up('sm'))
  const isMd = useMediaQuery(theme.breakpoints.up('md'))

  useEffect(() => {
    getMyPopularProduct()
  }, [])

  return (
    <Box
      sx={{
        p: '2rem',
        maxWidth: '1200px',
        margin: '0 auto 2rem',
      }}
    >
      <Typography
        variant="h4"
        color="text.secondary"
        textAlign="center"
        sx={{ fontFamily: 'var(--jfopenhuninn)', mb: 4 }}
      >
        熱門推薦商品
      </Typography>

      {!isMobile ? (
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {popularProductData.map((item) => {
            return (
              <SwiperSlide
                key={item.product_id}
                style={{ height: '100%', cursor: 'pointer' }}
              >
                <CarouselProductCard item={item} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      ) : (
        <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Grid container spacing={2} align-items="stretch">
            {popularProductData.map((item, i) => {
              return (
                <Grid
                  item
                  sm={i === 2 || i === 3 ? 5 : 3.5}
                  xs={12}
                  key={item.product_id}
                >
                  <PopularProductCard item={item} />
                </Grid>
              )
            })}
          </Grid>
        </Box>
      )}
    </Box>
  )
}

export default PopularProduct
