import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/footer'
// we want to keep intact header and footer and dynamically change home, about, contact us. for that we use outlet
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