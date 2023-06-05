import Banner from '../components/home/Banner'
import Marquee from '../components/home/Marquee'
import Carousel from '../components/home/Carousel'
import Mymap from '../components/home/Mymap'
import Introduce from '../components/home/Introduce'
import News from '../components/home/News'
import PopularProduct from '../components/home/PopularProduct'

const Home = () => {
  return (
    <>
      <Marquee></Marquee>
      <Carousel></Carousel>
      <Introduce></Introduce>
      <News></News>
      <PopularProduct></PopularProduct>
      <Banner></Banner>
      <Mymap></Mymap>
    </>
  )
}

export default Home
