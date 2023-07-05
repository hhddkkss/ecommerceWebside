import {
  Card,
  Box,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material'
import dayjs from 'dayjs'

const NewsCard = (props) => {
  const { article_pic_main, title, content_1, created_at } = props.item

  return (
    <Card
      sx={{
        height: '100%',
        transition: 'backgroundColor 0.3s ease-in',
        '&:hover': {
          backgroundColor: '#ddd',
        },
        '&:hover > div > img': {
          transform: 'scale(1.03)',
        },
      }}
      raised={true}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <CardMedia
          sx={{
            height: '180px',
            objectFit: 'cover',
            objectPosition: 'center center',
            transition: 'transform 0.5s ease-in',
            verticalAlign: 'middle',
            clipPath: 'polygon(0 70%, 0 0, 100% 0, 100% 70%, 50% 95%)',
          }}
          component="img"
          image={'/images/article/' + article_pic_main}
        />
      </Box>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '1',
            WebkitBoxOrient: 'vertical',
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '5',
            WebkitBoxOrient: 'vertical',
            marginBottom: 2,
          }}
        >
          {content_1}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.primary"
          sx={{ textAlign: 'right' }}
        >
          {dayjs(created_at).format('YYYY-MM-DD')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color={'primary'}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default NewsCard
