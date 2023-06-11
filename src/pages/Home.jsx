import Banner from '../components/home/Banner'
import Marquee from '../components/home/Marquee'
import Carousel from '../components/home/Carousel'
import Introduce from '../components/home/Introduce'
import News from '../components/home/News'
import PopularProduct from '../components/home/PopularProduct'
import Footer from '../components/home/Footer'
import MiddleMsg from '../components/home/MiddleMsg'
import Location from '../components/home/Location'

const Home = () => {
  return (
    <>
      <Marquee></Marquee>
      <Carousel></Carousel>
      <Introduce></Introduce>
      <MiddleMsg></MiddleMsg>
      <PopularProduct></PopularProduct>
      <Location></Location>
      <News></News>
      <Banner></Banner>
      <Footer></Footer>
    </>
  )
}

export default Home
