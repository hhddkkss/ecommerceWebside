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
  'More Than 30+ KOL Recommendation',
  'Excellent Quality',
  '1.5 Years Product Guarantee',
]

const Swiper = styled(SwiperComponent)`
  filter: ${({ sideBarExtend }) => sideBarExtend && 'blur(5px)'};
  background: #3c3c3c;
  height: 30px;
  margin-bottom: 1rem;
`
const SwiperSlide = styled(SwiperSlideComponent)`
  color: #fff;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  user-select: none;
  font-family: var(--Righteous);
`

const Marquee = ({ sideBarExtend }) => {
  return (
    <Swiper
      sideBarExtend={sideBarExtend}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      allowTouchMove={false}
    >
      {marqueeWord.map((v, i) => (
        <SwiperSlide key={i}>{v} </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Marquee
