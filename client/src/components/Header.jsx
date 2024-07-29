import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Blog Logo1.png'
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isNavShowing, setIsNavshowing] = useState(window.innerWidth > 800 ? true : false);

  const closeNavHandler = () => {
    if(window.innerWidth < 800) {
      setIsNavshowing(false);
    } else {
      setIsNavshowing(true);
    }
  }

  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="nav__logo" closeNavHandleronClick={closeNavHandler}>
          <img src={Logo} alt='Navbar Logo'></img>
        </Link>
        {isNavShowing && <ul className="nav__menu">
          <li><Link to="/profile/user" onClick={closeNavHandler}>Nusha's Blog</Link></li>
          <li><Link to="/create" onClick={closeNavHandler}>Create post</Link></li>
          <li><Link to="/authors" onClick={closeNavHandler}>Authors</Link></li>
          <li><Link to="/logout" onClick={closeNavHandler}>Logout</Link></li>
        </ul>}
        <button className="nav__toggle-btn" onClick={() => setIsNavshowing(!isNavShowing)}></button>
          {isNavShowing ? <AiOutlineClose /> : <FaBars/> }
      </div>
    </nav>
  )
}

export default Header