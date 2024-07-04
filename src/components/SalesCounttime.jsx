import React, { useEffect, useState } from 'react'
import Flex from './Flex'
import Semiclone from '../assets/Semiclone.png'
import Image from './Image'
import { countDownDateAndTime } from 'countdown-date-time'

const SalesCounttime = () => {
    const conduct_date = '2024-06-24 15:54:00';
    
    let [count,SetCount]=useState({});
    useEffect(()=>{
        const countDown = countDownDateAndTime(conduct_date);
        SetCount(countDown);   
    },[count]);

    console.log(count);
  return (
    <Flex className="items-center gap-[17px] lg:ml-[87px] mt-5">
        <div>
        <h4 className='font-poppins text-xs text-black leading-[18px]'>Days</h4>
        <h2 className='font-inter font-bold text-2xl lg:text-[32px] text-black leading-[30px] tracking-[4%] mt-1'>{count.days}</h2>
        
        </div>
        < Image className="mt-5" src={Semiclone} />
      <div>
      <h4 className='font-poppins text-xs text-black leading-[18px]'>Hours</h4>
      <h2 className='font-inter font-bold  text-2xl lg:text-[32px] text-black leading-[30px] tracking-[4%] mt-1'>{count.hours}</h2>
    </div>
    <Image className="mt-5" src={Semiclone} />
    <div>
      <h4 className='font-poppins text-xs text-black leading-[18px]'>Minutes</h4>
      <h2 className='font-inter font-bold text-2xl lg:text-[32px] text-black leading-[30px] tracking-[4%] mt-1'>{count.minutes}</h2>
    </div>
    <Image className="mt-5" src={Semiclone} />
    <div>
      <h4 className='font-poppins text-xs text-black leading-[18px]'>Seconds</h4>
      <h2 className='font-inter font-bold text-2xl lg:text-[32px] text-black leading-[30px] tracking-[4%] mt-1'>{count.seconds}</h2>
    </div>

    </Flex>

    
  )
}

export default SalesCounttime
