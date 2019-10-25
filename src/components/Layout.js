import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
