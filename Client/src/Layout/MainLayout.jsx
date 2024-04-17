import React from 'react'
import Navbar from '../Pages/Share/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Share/Footer/Footer'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default MainLayout