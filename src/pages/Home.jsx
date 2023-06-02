import React from 'react'
import Banner from '../components/home/Banner'
import Marquee from '../components/home/Marquee'
import Carousel from '../components/home/Carousel'
import Mymap from '../components/home/Mymap'
import Introduce from '../components/home/Introduce'

const Home = () => {
  return (
    <>
      <Carousel></Carousel>
      <Marquee></Marquee>
      <Introduce></Introduce>
      <Banner></Banner>
      <Mymap></Mymap>
    </>
  )
}

export default Home
