import React from 'react'
import Navbar from './Navbar'
import logo from '../assets/icons/Logo.svg'

export default function Header() {
  return (
    <header>
        <img src={logo} alt="little lemon brand logo" />
        <Navbar />
    </header>
  )
}