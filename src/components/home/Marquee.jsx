// Import Swiper React components
import {
  Swiper as SwiperComponent,
  SwiperSlide as SwiperSlideComponent,
} from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper'
import styled from '@emotion/styled'

const marqueeWord = [
  'Fast Delivery',
  'More Than 3k+  User',
  'Excellent Quality',
  '1.5 Years Product Guarantee',
]

const Swiper = styled(SwiperComponent)`
  /* background: #d9d6cf; */
  background-color: #fff;
  height: 30px;
`
const SwiperSlide = styled(SwiperSlideComponent)`
  color: var(--deepBlue);
  /* color: #fff; */
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  user-select: none;
  font-family: var(--Righteous);
`

const Marquee = () => {
  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      allowTouchMove={false}
    >
      {marqueeWord.map((v, i) => (
        <SwiperSlide key={i}>{v}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Marquee
