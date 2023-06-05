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
        background: '#e0e0de;',
      }}
    >
      <Typography
        variant="h4"
        color="text.secondary"
        sx={{ fontFamily: 'var(--jfopenhuninn)' }}
      >
        - 新鮮事
      </Typography>
      <Grid
        container
        spacing={10}
        sx={{ p: { md: 10, xs: 4 } }}
        align-items="stretch"
      >
        {newsData.map((item) => (
          <Grid item key={item.article_id} md={4} xs={12}>
            <Card
              sx={{
                height: '100%',
                '&:hover > div > img': {
                  transform: 'scale(1.1)',
                  filter: 'blur(1px)',
                },
              }}
              raised={true}
            >
              <Box sx={{ overflow: 'hidden' }}>
                <CardMedia
                  sx={{
                    height: 200,
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease-in',
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
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default News
