// Import Swiper React components
import {
  Swiper as SwiperComponent,
  SwiperSlide as SwiperSlideComponent,
} from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper'
import styled from '@emotion/styled'
import { useTheme } from '@mui/material'

const imgData = [
  {
    id: 1,
    src: '/images/product-carousel9.jpeg',
    content:
      '擁有優秀的攝影系統、高效能的處理器、長效的電池續航力以及快速的5G 上網速度。選擇 iPhone 13，讓您的生活更輕鬆、更便捷！',
    type: '本週主打商品',
  },
  {
    id: 2,
    src: '/images/product-carousel6.jpeg',
    content:
      ' 您是否在尋找一款功能強大、操作簡單且攜帶方便的平板電腦呢？我們的平板電腦擁有先進的處理器、高清的顯示屏幕、長效的電池續航力以及輕便的設計，讓您隨時隨地輕鬆應對工作、娛樂等多種場合。選擇我們的平板電腦，讓您輕鬆享受多重便利！',
    type: '本週主打商品',
  },
  {
    id: 3,
    src: '/images/product-carousel7.jpeg',
    content:
      ' 擁有更快速的處理器、更優秀的攝影技術、更長效的電池續航力以及更出色的顯示屏幕。選擇iPhone 14，體驗科技的極致力量！',
    type: '本週主打商品',
  },
]

const Swiper = styled(SwiperComponent)`
  width: 100%;
  height: 50vh;
  margin: 0 auto;

  & {
    .swiper-button-next:after {
      color: ${({ deepBlue }) => deepBlue};
    }
    .swiper-button-prev:after {
      color: ${({ deepBlue }) => deepBlue};
    }
    .swiper-pagination-bullet-active {
      background-color: #233a66 !important;
    }
    @media screen and (max-width: 576px) {
      height: 50vh;
      .swiper-button-next:after {
        display: none;
      }
      .swiper-button-prev:after {
        display: none;
      }
    }
  }
`

const SwiperSlide = styled(SwiperSlideComponent)`
  text-align: center;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: 50vh;
  object-fit: cover;
  @media screen and (max-width: 576px) {
    height: 50vh;
  }
`

const Advertise = styled.div`
  width: 100%;
  height: 50vh;
  background-color: rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0;
  font-family: var(--creamfont);
  @media screen and (max-width: 576px) {
    height: 50vh;
  }
`

const AdvertiseText = styled.div`
  width: 250px;
  position: absolute;
  bottom: 10%;
  left: 8%;
  letter-spacing: 0.05rem;
  padding: 1rem;
  border-radius: 5px;
  @media screen and (max-width: 576px) {
    width: 40px;
    height: fit-content;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    bottom: 50px;
    left: 50px;
  }
`
const AdvertiseTextH2 = styled.h2`
  color: ${({ deepBlue }) => deepBlue};
  margin-bottom: 1rem;
  text-align: center;
  @media screen and (max-width: 576px) {
    color: var(--textColorWhite);
    text-align: center;
    font-size: 20px;
  }
`

const AdvertiseTextP = styled.p`
  color: ${({ deepBlue }) => deepBlue};
  color: #fff;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
const Carousel = () => {
  const theme = useTheme()
  const { deepBlue } = theme.normal

  return (
    <Swiper
      pagination={{
        dynamicBullets: false, // 動態的pagination
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false, //設置為false 並且在用戶後不會自動播放
      }}
      loop={true} //是否可以循環 最後一張 => 第一張
      navigation={true} // navigation bar
      modules={[Navigation, Pagination, Autoplay]}
      deepBlue={deepBlue}
    >
      {imgData.map((img) => {
        return (
          <SwiperSlide key={img.id}>
            <Image src={img.src} alt="dog" />
            <Advertise>
              <AdvertiseText>
                <AdvertiseTextH2 deepBlue={deepBlue}>
                  {img.type}
                </AdvertiseTextH2>
                <AdvertiseTextP deepBlue={deepBlue}>
                  {img.content}
                </AdvertiseTextP>
              </AdvertiseText>
            </Advertise>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Carousel
