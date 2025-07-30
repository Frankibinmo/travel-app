'use client'
import React, { useState } from 'react'
import Nav from './Nav'
import PhoneNav from './PhoneNav'

const ResponsiveNav = () => {
  const[showNav, setShowNav] = useState(false)
  const handShowNav = () => setShowNav(true)
  const handleCloseNav = () => setShowNav(false)
  return (
    <div>
      <Nav openNav={handShowNav} />
      <PhoneNav showNav={showNav} closeNav ={handleCloseNav} />
    </div>
  );
}

export default ResponsiveNav
