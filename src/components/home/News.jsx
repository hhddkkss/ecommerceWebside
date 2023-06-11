import styled from '@emotion/styled'
import {
  Card,
  Grid,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from '@mui/material'
import { fetchNews } from '../../utils/homeHelper'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

const News = () => {
  const [newsData, setNewsData] = useState([])

  //推薦文章

  const getMyNews = () =>
    fetchNews()
      .then((res) => setNewsData(res))
      .catch((e) => {
        throw new Error(e)
      })
  //

  useEffect(() => {
    getMyNews()
  }, [])

  return (
    <Box
      sx={{
        p: '2rem',
        maxWidth: '1200px',
        margin: 'auto',
      }}
    >
      <Typography
        variant="h4"
        color="text.secondary"
        textAlign="center"
        sx={{ fontFamily: 'var(--jfopenhuninn)', mb: 4 }}
      >
        新鮮事
      </Typography>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Grid container spacing={2} alignItems="stretch">
          {newsData.map((item) => (
            <Grid item key={item.article_id} sm={4} xs={12}>
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
                      height: '300px',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease-in',
                      verticalAlign: 'middle',
                      clipPath:
                        'polygon(50% 0%, 100% 0, 100% 50%, 50% 100%, 50% 100%, 0 50%, 0 0)',
                    }}
                    component="img"
                    image={'/images/article/' + item.article_pic_main}
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
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical',
                      marginBottom: '2rem',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '5',
                      WebkitBoxOrient: 'vertical',
                      marginBottom: '2rem',
                    }}
                  >
                    {item.content_1}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.primary"
                    sx={{ textAlign: 'right' }}
                  >
                    {dayjs(item.created_at).format('YYYY-MM-DD')}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color={'primary'}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default News
