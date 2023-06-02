import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'

const Container = styled.div`
  background: #f8f7f4;
  font-family: var(--creamfont);
  display: flex;
  flex-wrap: nowrap;
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`

const Left = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
`

const Right = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    flex-direction: column;
    padding: 1rem;
  }
`

const Title = styled.h2`
  color: var(--deepBlue);
  margin-bottom: 4rem;
  font-weight: 600;
  font-size: 40px;
  @media screen and (max-width: 1000px) {
    padding-left: 1rem;
  }
`

const Slogan = styled.p`
  font-size: 30px;
  margin-bottom: 2rem;
  @media screen and (max-width: 1000px) {
    padding-left: 1rem;
  }
`

const Content = styled.p`
  width: 300px;
  @media screen and (max-width: 1000px) {
    padding-left: 1rem;
  }
`

const ImageLeft = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  margin-left: -100px;
  margin-top: -100px;
  margin-bottom: 1rem;
  @media screen and (max-width: 1000px) {
    margin-left: 0px;
    margin-top: 0px;
  }
`
const ImageRight = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  margin-left: -50px;
  margin-top: 200px;
  margin-bottom: 1rem;
  @media screen and (max-width: 1000px) {
    margin-left: 0px;
    margin-top: 0px;
  }
`

const Introduce = () => {
  return (
    <Container>
      <Left>
        <Box>
          <Title>Bee a Choice!</Title>
          <Slogan>科技生活，</Slogan>
          <Slogan>科技選物。</Slogan>
          <Content>
            我們是一個希望讓所有人更方便挑選到適合自己商品的3C電商,帶給大家有質感的商品。
          </Content>
        </Box>
      </Left>
      <Right>
        <ImageLeft src="/public/images/home/introduce1.jpg"></ImageLeft>
        <ImageRight src="/public/images/home/introduce2.jpg"></ImageRight>
      </Right>
    </Container>
  )
}

export default Introduce
