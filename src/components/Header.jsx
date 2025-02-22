import React from 'react'
import Navbar from './Navbar'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="little lemon brand logo" />
      <Navbar />
    </header>
  )
}

export default Header;