import styled from '@emotion/styled'
import { fetchPopularProduct } from '../../utils/homeHelper'
import { Box, CardMedia, Typography, Card, Grid } from '@mui/material'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useEffect, useState } from 'react'

const PopularProduct = () => {
  const [popularProductData, setPopularProductData] = useState([])
  const [mobileMode, setMobileMode] = useState(false)
  const getMyPopularProduct = () =>
    fetchPopularProduct()
      .then((res) => setPopularProductData(res))
      .catch((e) => {
        throw new Error(e)
      })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setMobileMode(true)
      } else {
        setMobileMode(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [mobileMode])

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

      {mobileMode ? (
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
                <Box
                  sx={{
                    height: '450px',
                    padding: '1rem',
                  }}
                  raised={true}
                >
                  <Typography variant="body1" sx={{ color: 'red' }}>
                    Recommend
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    {item.product_name}
                  </Typography>
                  <Typography variant="h6">
                    {(+item.product_price).toLocaleString('zh-TW', {
                      style: 'currency',
                      currency: 'NTD',
                      minimumFractionDigits: 0,
                    })}
                  </Typography>
                  <Box sx={{ aspectRatio: 1 / 1 }}>
                    <CardMedia
                      src={`/images/${item.product_pic[0]}`}
                      sx={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        verticalAlign: 'top',
                      }}
                      component="img"
                    ></CardMedia>
                  </Box>
                </Box>
              </SwiperSlide>
            )
          })}
        </Swiper>
      ) : (
        <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Grid container spacing={2} align-items="stretch">
            {popularProductData.map((item) => {
              return (
                <Grid item sm={4} xs={12} key={item.product_id}>
                  <Card
                    sx={{
                      height: '100%',
                      padding: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease-in',
                      '&:hover': {
                        transform: 'scale(1.01)',
                        boxShadow: '2px 4px 16px rgba(0,0,0,.16);',
                      },
                    }}
                    raised={true}
                  >
                    <Typography variant="body1" sx={{ color: 'red' }}>
                      Recommend
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                      {item.product_name}
                    </Typography>
                    <Typography variant="h6">
                      {(+item.product_price).toLocaleString('zh-TW', {
                        style: 'currency',
                        currency: 'NTD',
                        minimumFractionDigits: 0,
                      })}
                    </Typography>
                    <Box sx={{ aspectRatio: 1 / 1 }}>
                      <CardMedia
                        src={`/images/${item.product_pic[0]}`}
                        sx={{
                          objectFit: 'cover',
                          width: '100%',
                          height: '100%',
                        }}
                        component="img"
                      ></CardMedia>
                    </Box>
                  </Card>
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
