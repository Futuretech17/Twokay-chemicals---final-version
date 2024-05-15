import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
            <NavLink to="/" className="logo-title">
                <img alt= "Twokay logo" src="../icons/twokaylogo.png"></img>
                <span>Twokay</span> Chemicals Ltd
            </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px"><path d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z"/></svg>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar