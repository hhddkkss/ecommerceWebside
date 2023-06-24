import styled from '@emotion/styled'
import { LocalMall } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Container = styled(Box)`
  position: relative;
  height: 690px;
  background: url('/images/Home/homechangeafter.png');
  background-size: cover;
  margin-bottom: 1rem;
  @media screen and (max-width: 800px) {
    background-position: center;
  }
`

const TextContainer = styled.div`
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 300px;
  height: 300px;
  padding: 1rem;
  @media screen and (max-width: 800px) {
    bottom: 4%;
    right: 3%;
  }
`

const style = {
  fontFamily: 'var(--jfopenhuninn)',
  color: '#f9f9f9',
  marginBottom: '1rem',
  letterSpacing: '0.1rem',
}

const Banner = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <TextContainer>
        <Typography variant="h2" sx={{ ...style }}>
          Smart
        </Typography>
        <Typography variant="h2" sx={{ ...style, mb: 6 }}>
          Choice.
        </Typography>
        <Button
          variant="contain"
          sx={{
            fontSize: '35px',
            color: '#f9f9f9',
            border: '3px solid #e1e1e1',
          }}
          onClick={() => {
            navigate('/bee/product')
          }}
          color="secondary"
          endIcon={<LocalMall style={{ fontSize: '35px' }} />}
        >
          開始挑選
        </Button>
      </TextContainer>
    </Container>
  )
}

export default Banner
