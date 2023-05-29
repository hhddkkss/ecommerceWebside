// Import Swiper React components
import {
  Swiper as SwiperComponent,
  SwiperSlide as SwiperSlideComponent,
} from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
// import required modules
import { Autoplay } from 'swiper'
import styled from '@emotion/styled'

const Swiper = styled(SwiperComponent)`
  background: #3c3c3c;
  height: 30px;
  margin-bottom: 1rem;
`
const SwiperSlide = styled(SwiperSlideComponent)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
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
    >
      <SwiperSlide>Fast Delivery </SwiperSlide>
      <SwiperSlide>More Than 3000+ Customers</SwiperSlide>
      <SwiperSlide>Good Quality</SwiperSlide>
    </Swiper>
  )
}

export default Marquee
