import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Blog Logo1.png'
import { FaBars } from "react-icons/fa6";
// import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    
    <nav>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src={Logo} alt='Navbar Logo'></img>
        </Link>
        <ul className="nav__menu">
          <li><Link to="/profile/user">Nusha's Blog</Link></li>
          <li><Link to="/create">Create post</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
        <button className="nav__toggle-btn"></button>
        {/* <AiOutlineClose /> */}
      </div>
    </nav>
  )
}

export default Header