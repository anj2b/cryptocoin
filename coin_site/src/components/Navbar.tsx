import React from 'react'
import './Navbar.css'
import Logo from '../assets/logo.png'
import { Link } from "react-scroll";


const Navbar = () => {
  return (
    <div className="navbar">
            <img
              src={Logo}
              alt=""
              className="avatar"
            />
    <div className="wrapper">
      <div className="items">
        <div className="item">
            <Link 
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Home</Link>
        </div>
        <div className="item">
        <Link 
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>About</Link>
        </div>
        <div className="item">
        <Link 
                activeClass="active"
                to="how-to-buy"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>How to Buy</Link>
        </div>
        <div className="item">
        <Link 
                activeClass="active"
                to="roadmap"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Roadmap</Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar