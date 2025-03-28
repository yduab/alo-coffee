import React, { useState } from 'react'
import './Navbar.css'
import logo from'../../assets/logo1.png'
import menu_icon from'../../assets/menu-icon1.png'
import { Link, ScrollLink } from 'react-scroll'
const Navbar = () => {
  const [mobileMenu, setMobileMenu]= useState(false);
  const toggleMenu =()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true)

 }

  return (
    <nav className='container'>
      <Link to="hero" smooth={true} offset={0} duration={500} className="logo">
        <img src={logo} alt="ALO Coffee" className='logo' />
    </Link>

        <ul className={mobileMenu? '':'hide-menu'}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="exports" smooth={true} offset={-260} duration={500}>Exporting Products</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to="gallery" smooth={true} offset={-260} duration={500}>Gallery</Link></li>
            <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>

        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar