import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-container  mx-auto px-3 lg:px-5'>
      {children}
    </div>
  )
}

export default Container
