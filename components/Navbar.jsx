"use client"
import "../styles/Navbar.scss"
import { Menu, Person, Search, ShoppingCart } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

  const [dropdownMenu, setDropdownMenu] = useState(false)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <>
      <div className='navbar'>
        <a href="/">
          <img src='/assets/new__logo.png' alt='logo'/>
        </a>
        
        {/* Navbar links for desktop */}
        <div className="navbar__info">
          <a href="/about-us">About Us</a>
          <a href="/contact-us">Contact Us</a>
        </div>

        <div className='navbar_search'>
          <input type='text' placeholder='Search...'/>
          <IconButton>
            <Search sx={{ color: "#121212" }} style={{cursor: "pointer"}} />
          </IconButton>
        </div>

        <div className='navbar_right'>
            <a href="/cart" className="cart">
              <ShoppingCart sx={{ color: "gray" }}/>
              Cart <span>({0})</span>
            </a>
        </div>

        <div className='navbar_right'>
          <button className='navbar_right_account' onClick={() => setDropdownMenu(!dropdownMenu)}>
            <Menu sx={{ color: "gray" }} />
              <Person sx={{ color: "gray" }} />
          </button>

          {dropdownMenu && (
            <>
            <div className='navbar_right_accountmenu'>
              <Link href="/login">Log In</Link>
              <Link href="/register">Sign Up</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/contact-us">Contact Us</Link>
            </div>
            </>
          )}
        </div>
        
      </div>
     
    </>
  )
}

export default Navbar