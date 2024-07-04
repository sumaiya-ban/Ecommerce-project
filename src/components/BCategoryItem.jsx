import React from 'react'
import { IoIosPhonePortrait } from "react-icons/io";

const BCategoryItem = () => {
  return (
    <div className="w-[170px]  h-[145px] border border-gray rounded-1 group text-center py-[25px] hover:bg-third">
      <IoIosPhonePortrait className="text-[56px] mx-auto group-hover:text-white"/>
      
      <h3 className='font-poppins font-normal text-base leading-6 text-black mt-4 group-hover:text-white'>Phones</h3>
    </div>
  )
}

export default BCategoryItem
