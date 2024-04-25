import React, {useState}from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';





const Navbar = () => {

    const [showDiv, setShowDiv] = useState(false);

    const handleHover = () => {
    setShowDiv(true);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    console.log('Toggle Mobile Menu')
  };
  


  const handleLeave = () => {
    setShowDiv(false);
  };


    return (
        <Container>
        {/* <Promotions>
          <p>
            YOUR NUMBER ONE NON-PHARMA SUPPLIER
          </p>
        </Promotions>
        <Hr />   */}
        <Nav>
        <Logo > 
        <NavLink to="/" className="logo-title">
          <span>Twokay</span> Chemicals Ltd
        </NavLink> 
        </Logo>  
        <Navmenu>
        <NavLink className = 'navLink' activeclassName={({ isActive }) => (isActive ? 'active' : '')} onMouseOver={handleHover} onMouseLeave={handleLeave} to = "/"><span>Home</span></NavLink>
        <NavLink className = 'navLink' activeclassName={({ isActive }) => (isActive ? 'active' : '')} onMouseOver={handleHover} onMouseLeave={handleLeave} to = "/products"><span>Products</span></NavLink>
        <NavLink className = 'navLink' activeclassName={({ isActive }) => (isActive ? 'active' : '')} onMouseOver={handleHover} onMouseLeave={handleLeave} to = "/contact"><span>Contact</span></NavLink>
        <NavLink className = 'navLink' activeclassName={({ isActive }) => (isActive ? 'active' : '')} onMouseOver={handleHover} onMouseLeave={handleLeave}  to = "/about"><span>About</span></NavLink>
        <div className='logoHamburger'>

        <div className="hamburger" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
  
        </div>

        </Navmenu>  

         
        </Nav>

        {/* <Hr />   */}
        
        </Container>
        
    )
}

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
margin-top: 0;
background-color:  #21211f;

.relativePosition {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

`


const Nav = styled.nav`
display:flex;
flex-direction:row;
justify-content: space-between;
width:100%;
height: 70px;
background-color: #21211f;
padding-left: 30px;

@media (max-width: 1248px) {
  padding-left: 0;
}`


const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #3f3f3f;

.logo-title {
  font-family: 'Allura', cursive;
  font-size: 1.5em; /* Adjust the font size as needed */
  span {
    color: #ffbb01;
  }
  
  text-decoration: none; /* Add this line to remove the underline */
  cursor: pointer;

  font-family: Playfair Display,serif;
  font-size:27px;
  text-align: left;
  padding: 0 0 0 10px;


  @media (max-width: 1248px) {
    font-size: 1.2em;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: normal;
  }
}
`


const Navmenu = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
min-width:700px;
width:30%;
white-space:nowrap;
max-width:100vw;
cursor:pointer;

.hamburger {
    display: none;
    cursor: pointer;

    span {
        display: block;
        width: 20px;
        height: 1px;
        margin-bottom: 5px;
        background-color: #ffffff;
      
      &:last-child {
        margin-bottom: 0;
    }}

    
    @media (max-width: 992px) {
    Navmenu {
        width:100vw;
    }
    

    display:block;
}  
}

.navLink {
    position:relative;
    text-decoration:none;
    color: #848484;
    font-family: forma-djr-text,serif;
    font-variant: full-width;
    font-size:15px;
    padding: 5px;
    white-spacing:no-wrap;
    font-weight:300;
    font-style:normal;
    line-height: 16px;


    span {
    display: inline-block;
    position: relative;
  }

    span::before {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    bottom: -20px;
    left: 0;
    background-color: #474747;
    transition: width 0.3s ease-in-out;
    }

    &:hover
    span::before {
    width: 100%;}
    
@media (max-width: 992px){
    display: none;
}

}

nav a.active {
  color: ##ffbc01
}

.logoHamburger {
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    color:#848484;
    font-family: forma-djr-text,sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    font-style: normal;
    letter-spacing: 1.94px;
    @media (max-width: 992px) {
        position:absolute;
        right: 30px;

    }
}

/* CSS for sliding from the right and adjusting the starting point from the top */
.mobile-menu {
  display: none; /* Initially hidden */
  position: fixed;
  top: 0; /* Adjust the top value to set the starting point from the top */
  left: -100%; /* Initially off-screen on the right */
  width: 70%; /* Adjust the width as needed */
  height: 100%;
  background-color: #f8f7f3;
  transition: right 0.5s ease-in-out; /* Update the transition property to affect "right" */
  z-index: 1000;
}

/* Media query for screens with a maximum width of 992px (typical mobile view) */
@media (max-width: 992px) {
  .mobile-menu {
    display: block; /* Show the mobile menu for mobile screens */
  }
}


.mobile-menu.open {
  left: 0; /* Slide in from the left when open */
}


`



export default Navbar;