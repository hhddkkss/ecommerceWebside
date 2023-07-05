import { Box, Typography, CardMedia } from '@mui/material'
const CarouselProductCard = (props) => {
  const { product_name, product_pic, product_price } = props.item

  return (
    <Box
      sx={{
        height: '350px',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        '&>p': {
          flexGrow: 0,
        },
      }}
      raised={true}
    >
      <Typography variant="body1" sx={{ color: 'red' }}>
        Recommend
      </Typography>
      <Typography variant="h6" color="text.secondary">
        {product_name}
      </Typography>
      <Typography variant="h6" color="error">
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
            verticalAlign: 'top',
          }}
          component="img"
        ></CardMedia>
      </Box>
    </Box>
  )
}

export default CarouselProductCard
