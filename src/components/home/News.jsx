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
import NewsCard from './NewsCard'

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
        <Grid container spacing={6} alignItems="stretch">
          {newsData.map((item) => (
            <Grid item key={item.article_id} sm={4} xs={12}>
              <NewsCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default News
