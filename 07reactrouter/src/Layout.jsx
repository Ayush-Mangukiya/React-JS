import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/footer'
import { Outlet } from 'react-router-dom'

function 
Layout() {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default 
Layout  