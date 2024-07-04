import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'


const RootLayout = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default RootLayout
