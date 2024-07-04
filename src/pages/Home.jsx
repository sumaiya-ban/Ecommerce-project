import React from 'react'
import Banner from '../components/Banner'
import Flashsales from '../components/Flashsales'
import BCategory from '../components/BCategory'
import BestSelling from '../components/BestSelling'
import OfferProduct from '../components/OfferProduct'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Flashsales/>
      <BCategory/>
      <BestSelling/>
      <OfferProduct/>
    </div>
  )
}

export default Home
