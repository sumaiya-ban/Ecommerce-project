import React from 'react'
import Image from './Image'
import Postcard from '../assets/Frame 611.png'
import Flex from './Flex'
import List from './List'
import ListCome from './ListCome'

import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const ProductCard = () => {
  
  return (
    <div className="w-full lg:w-[270px] sm:px-3 lg:px-0">
      <div className="group overflow-hidden w-full relative bg-secondary h-[250px] rounded-[4px] flex justify-center items-center">
        <h5 className="font-poppins text-sm font-normal text-white bg-third px-3 py-1 rounded-[4px] absolute top-3 left-3 ">-40%</h5>
        <Image src={Postcard}/>
        <button className="w-full group-hover:bottom-0 duration-500 font-poppins font-medium text-base text-white bg-black py-2 rounded-b-[4px] leading-6 absolute bottom-[-100%] left-0 ">Add to cart</button>

        <div className="absolute top-[17px] right-[17px]">
          <div className="bg-white p-[5px] rounded-full">
          <CiHeart className="text-2xl" />
          </div>
          <div className="bg-white p-[5px] rounded-full mt-[13px]">
          <IoEyeOutline className="text-2xl" />
          </div>
        </div>
      </div>
      <h2 className="font-poppins font-medium text-base text-black leading-6 mt-4">HAVIT HV-G92 Gamepad</h2>
      <Flex className="gap-4">
      <h3 className="font-poppins font-medium text-base text-third leading-6 mt-2">$120</h3>
      <del className="font-poppins font-medium text-base text-[#808080] leading-6 mt-2">$160</del>
      </Flex>
      <List className="flex gap-1 my-2">
        <ListCome>
        <FaStar className="text-yellow" />
        
        </ListCome>
        <ListCome>
        <FaStar className="text-yellow" />
        
        </ListCome>
        <ListCome>
        <FaStar className="text-yellow" />
        
        </ListCome>
        <ListCome>
        <FaStar className="text-yellow" />
        
        </ListCome>
        <ListCome>
        <FaStar className="text-yellow" />
        
        </ListCome>
        <h3 className="font-poppins text-sm  leading-[21px] text-ash font-semibold ml-2">(88)</h3>
      </List>
      
     
    </div>
  )
}

export default ProductCard
