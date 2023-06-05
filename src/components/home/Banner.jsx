import styled from '@emotion/styled'
import { LocalMall } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Container = styled(Box)`
  position: relative;
  height: 690px;
  background: url('/public/images/Home/homechangeafter.png');
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

const Text = styled.p`
  font-size: 50px;
  font-family: var(--jfopenhuninn);
  color: #f9f9f9;
  margin-bottom: 1rem;
  letter-spacing: 0.1rem;
`

const Banner = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <TextContainer>
        <Text>Smart</Text>
        <Text style={{ marginBottom: '3rem' }}>Choice.</Text>
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
