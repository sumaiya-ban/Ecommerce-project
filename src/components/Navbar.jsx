import React, { useState } from 'react'
import Container from './Container'
import Image from './Image'
import List from './List'
import ListCome from './ListCome'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Flex from './Flex'
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {
  let [menuShow,setmenuShow]=useState(false);
  let HandleMenu= () =>{
    setmenuShow(!menuShow);
  }
  return (
    <nav className="mt-10 border-b relative z-50 pb-4">
      <Container>
        <Flex className="justify-between items-center">
        <Image src="./Exclusive.png" alt="Exclusive"/>
        <div className={`${menuShow ? 'block' : 'hidden'} lg:flex w-full p-5 lg:p-0 left-0 lg:w-[73%] justify-between bg-black lg:bg-transparent items-center absolute top-10 lg:static`}>
        <List>
 <ListCome className="text-white lg:text-black text-base font-normal font-poppins after:contents-[''] after:w-0 mt-3 lg:mt-0 lg:hover:after:w-full   after:h-[1px] after:bg-black after:absolute after:bottom-0 relative after:left-0 block lg:inline-block mr-[48px] transition duration-500 ease-linear cursor-pointer delay-500 " >Home</ListCome>
 <ListCome className="text-white lg:text-black text-base font-normal font-poppins after:contents-[''] after:w-0 mt-3 lg:mt-0 lg:hover:after:w-full  after:h-[1px] after:bg-black after:absolute after:bottom-0 relative after:left-0 block lg:inline-block mr-[48px] transition duration-500 ease-linear cursor-pointer delay-500">Contact</ListCome>
 <ListCome className="text-white lg:text-black text-base font-normal font-poppins after:contents-[''] after:w-0 mt-3 lg:mt-0 lg:hover:after:w-full  after:h-[1px] after:bg-black after:absolute after:bottom-0 relative after:left-0 block lg:inline-block mr-[48px] transition duration-500 ease-linear cursor-pointer delay-500">About</ListCome>
 <ListCome className="text-white lg:text-black text-base font-normal font-poppins after:contents-[''] after:w-0 mt-3 lg:mt-0 lg:hover:after:w-full  after:h-[1px] after:bg-black after:absolute after:bottom-0 relative after:left-0 block lg:inline-block mr-[48px] transition duration-500 ease-linear cursor-pointer delay-500">Sign Up</ListCome>
</List>

<Flex className=" items-center gap-6">
  <div className='relative w-[243px] lg:mt-0 mt-5'>
  <input className='bg-secondary w-full py-3 px-5 placeholder:font-poppins text-xs leading-[18px] 
  placeholder:text-black' type='text' placeholder='What are you looking for?'/>
  <CiSearch  className='absolute top-3 right-4 text-base'/>
  </div>
  
  <Flex className="items-center gap-4">
  <CiHeart  className='text-2xl ml-[24px]  lg:text-black text-white' />
  <CiShoppingCart className='text-2xl ml-[16px] lg:text-black text-white' />
  </Flex>
  
</Flex>
        </div>

        <CiMenuFries  onClick={HandleMenu} className="xl:hidden text-2xl absolute top-0 right-3"/>

        </Flex>

</Container>
      </nav>
    
    
  )
}

export default Navbar

