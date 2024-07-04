

import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";
const Header = () => {
  return (
    <header className='bg-black py-3'>
        <Container>
          <div className='text-regal-white relative'>
            
            <h3 className='w-[80%] lg:w-full font-poppins text-xs lg:text-sm font-normal leading-5 text-center'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link className=' font-semibold font-poppins underline ml-2 leading-6 '>ShopNow</Link>
            </h3>
            

            
            <select id="countries" class="bg-black font-regular w-[78px] roundede-none focus:outline-none absolute right-0 top-0">
            <FaAngleDown />
    <option value="US">English</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
          </div>
        </Container>
    </header>
  )
}

export default Header
