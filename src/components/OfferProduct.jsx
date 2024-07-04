import React from 'react'
import Container from './Container'
import Image from './Image'
import OfferImg from '../assets/Frame 600.png'
import { Link } from 'react-router-dom'

const OfferProduct = () => {
  return (
    <section className='lg:mt-[140px] mt-5'>
      <Container>
        <Link><Image src={OfferImg}/></Link>
        
      </Container>
    </section>
  )
}

export default OfferProduct
