import React from 'react'
import Container from './Container'
import Title from './Title'
import Flex from './Flex'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

const BestSelling = () => {
  return (
    <section className='lg:mt-[150px] mt-[50px]'>
      <Container>
        <Flex className="justify-between lg:items-center flex-col lg:flex-row">
        <Title subtitle="This Month" title="Best Selling Products"/>
        <div className="lg:text-center mt-[60px]">
        <Link className='rounded-[4px] font-poppins inline-block font-medium text-base leading-6 text-white
         bg-third py-2 lg:py-4 px-3  '>View All</Link>
        </div>
        </Flex>
        
        <Flex className="lg:mt-[60px] mt-7 justify-between flex-wrap">
            
        <ProductCard/> 
        <ProductCard/> 
        <ProductCard/> 
        <ProductCard/> 
        </Flex>
      </Container>
    </section>
  )
}

export default BestSelling
