import React from 'react'

const Title = ({subtitle,title}) => {
  return (
    <div>
      <h4 className='font-poppins relative text-third text-base font-semibold after:w-[20px] after:h-[20px] lg:after:h-[40px] after:contents-[] after:absolute 
      after:top-2/4 after:translate-y-[-50%] pl-[36px] after:left-[10px] lg:after:left-0 after:bg-third after:rounded-[4px]'> {subtitle}</h4>
      <h2 className='font-inter font-semibold text-2xl lg:text-[36px] text-black leading-12 mt-6 '>{title}</h2>
    </div>
  )
}

export default Title
