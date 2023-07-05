import { useTheme } from '@emotion/react'
import { Box, Card, CardMedia, Typography, useMediaQuery } from '@mui/material'

const PopularProductCard = (props) => {
  const theme = useTheme()

  const { product_pic, product_name, product_price } = props.item
  const isMd = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Card
      sx={{
        height: '100%',
        padding: '1rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in',
        display: 'flex',
        flexDirection: 'column',
        '&>p': {
          flexGrow: 0,
        },
        '&:hover': {
          transform: 'scale(1.01)',
          boxShadow: '2px 4px 16px rgba(0,0,0,.16);',
        },
      }}
      raised={true}
    >
      <Typography
        variant={isMd ? 'subtitle' : 'body1'}
        sx={{ color: 'red', fontSize: '12px' }}
      >
        Recommend
      </Typography>
      <Typography variant={isMd ? 'h6' : 'body1'} color="text.secondary">
        {product_name}
      </Typography>
      <Typography variant={isMd ? 'h6' : 'body1'} color="error">
        {(+product_price).toLocaleString('zh-TW', {
          style: 'currency',
          currency: 'NTD',
          minimumFractionDigits: 0,
        })}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <CardMedia
          src={`/images/${product_pic[0]}`}
          sx={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          component="img"
        ></CardMedia>
      </Box>
    </Card>
  )
}

export default PopularProductCard
