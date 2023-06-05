import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { debounce } from '../../utils/globalHelper'

const Container = styled.div`
  /* background: #f8f7f4; */
  background: #f0f0f0;
  /* background: radial-gradient(circle at 30%, #f8f7f4, #d2d2d2); */
  font-family: var(--creamfont);
  display: flex;
  flex-wrap: nowrap;
  /* padding: 5rem; */
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  flex-basis: 40%;
  @media screen and (max-width: 1000px) {
    padding: 3rem;
    flex-basis: 100%;
  }
`

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-basis: 60%;
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    flex-direction: column;
    padding: 1rem;
    flex-basis: 100%;
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

const ContentLeft = styled.p`
  width: 250px;
  align-self: flex-end;
  font-size: 20px;
  color: var(--deepBlue);
  font-weight: 700;
  /*  移動到 (130px, -60px) */
  /* transform: translate(130px, 100%); */
  transform: ${({ contentMove }) =>
    contentMove ? 'translate(130px, -60px)' : 'translate(130px, 100%)'};

  transition: all 0.8s ease-in-out;
  @media screen and (max-width: 1000px) {
    transform: translate(0, 0);
    align-self: center;
    margin-bottom: 1rem;
  }
`

const ContentRight = styled.p`
  width: 250px;
  align-self: flex-start;
  font-size: 20px;
  color: var(--deepBlue);
  font-weight: 700;
  /* 移動到 (-200px , 70px) */
  /* transform: translate(-200px, -100%); */
  transform: ${({ contentMove }) =>
    contentMove ? 'translate(-200px , 70px)' : 'translate(-200px, -100%)'};
  transition: all 0.8s ease-in-out;
  @media screen and (max-width: 1000px) {
    transform: translate(0, 0);
    align-self: center;
    margin-bottom: 1rem;
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
  const introduceRef = useRef(null)

  const [contentMove, setContentMove] = useState(false)

  const handleScroll = () => {
    const { scrollTop, clientHeight } = document.documentElement
    const introduceDistance = introduceRef.current.offsetTop
    if (scrollTop > introduceDistance / 4) {
      setContentMove(true)
    }
  }

  useEffect(() => {
    const handleScrollDebounce = debounce(handleScroll)

    if (!contentMove) {
      window.addEventListener('scroll', handleScrollDebounce)
    }

    return () => {
      window.removeEventListener('scroll', handleScrollDebounce)
    }
  }, [contentMove])

  return (
    <Container ref={introduceRef}>
      <Left>
        <Box>
          <Title>Bee a Choice!</Title>
          <Slogan>科技生活，</Slogan>
          <Slogan>科技選物。</Slogan>
        </Box>
      </Left>
      <Right>
        <ContentLeft contentMove={contentMove}>
          我們在乎每一位客人， 在乎每一個想法。
        </ContentLeft>
        <ImageLeft src="/public/images/home/introduce1.jpg"></ImageLeft>
        <ImageRight src="/public/images/home/introduce2.jpg"></ImageRight>
        <ContentRight contentMove={contentMove}>
          我們只想給您最好的， 相信您的選擇， 最好的都在BEEbeE。
        </ContentRight>
      </Right>
    </Container>
  )
}

export default Introduce
