import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
    <nav>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src='' alt='Logo'></img>
        </Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
      </div>
    </nav>
  )
}

export default Header
