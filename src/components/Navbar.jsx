import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        console.log('Toggle Mobile Menu');
    };

    return (
        <Container>
            {/* <Promotions>
                <p>
                    YOUR NUMBER ONE NON-PHARMA SUPPLIER
                </p>
            </Promotions>
            <Hr /> */}
            <Nav>
                <Logo>
                    <NavLink to="/" className="logo-title">
                        <img alt= "Twokay logo" src="../icons/twokaylogo.png"></img>
                        <span>Twokay</span> Chemicals Ltd
                    </NavLink>
                </Logo>
                <Navmenu>
                    <NavLink className='navLink' activeClassName='active' to="/"><span>Home</span></NavLink>
                    <NavLink className='navLink' activeClassName='active' to="/products"><span>Products</span></NavLink>
                    <NavLink className='navLink' activeClassName='active' to="/contact"><span>Contact</span></NavLink>
                    <NavLink className='navLink' activeClassName='active' to="/about"><span>About</span></NavLink>
                    <div className='logoHamburger'>
                        <div className="hamburger" onClick={toggleMobileMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Navmenu>
            </Nav>
            {/* <Hr /> */}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    background-color: #21211f;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background-color: #21211f;
    padding-left: 30px;

    @media (max-width: 1248px) {
        padding-left: 0;
    }
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3f3f3f;

    img {
      width:60px;
      height: 60px;
      margin-right: 10px;
      border-radius: 50%;
    }

    /* Media query for smaller screens */
      @media screen and (max-width: 767px) {
       img {
          width: 35px;
          height: 35px;
      }
      }
  
      /* Your existing media queries for larger screens */
      @media screen and (min-width: 768px) {
      img {
          width: 40px;
          height: 40px;
      }
      }
  
      @media screen and (min-width: 992px) {
      img {
          width: 50px;
          height: 50px;
      }
      }

    .logo-title {
        font-family: 'Allura', cursive;
        font-size: 1.5em;
        span {
            color: #ffbb01;
        }
        text-decoration: none;
        cursor: pointer;
        font-family: Playfair Display, serif;
        font-size: 27px;
        text-align: left;
        padding: 0 0 0 10px;

        @media (max-width: 1248px) {
            font-size: 1.2em;
            white-space: nowrap;
            text-overflow: ellipsis;
            word-break: normal;
        }

      
    }
`;

const Navmenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 700px;
    width: 30%;
    white-space: nowrap;
    max-width: 100vw;
    cursor: pointer;

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
            }
        }

        @media (max-width: 992px) {
            Navmenu {
                width: 100vw;
            }

            display: block;
        }
    }

    .navLink {
        position: relative;
        text-decoration: none;
        color: #848484;
        font-family: forma-djr-text, serif;
        font-variant: full-width;
        font-size: 15px;
        padding: 5px;
        white-spacing: no-wrap;
        font-weight: 300;
        font-style: normal;
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

        &:hover span::before {
            width: 100%;
        }

        @media (max-width: 992px) {
            display: none;
        }
    }

    .active {
        color: #ffbc01;
    }

    .logoHamburger {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: #848484;
        font-family: forma-djr-text, sans-serif;
        font-size: 10px;
        font-weight: 400;
        line-height: 16px;
        font-style: normal;
        letter-spacing: 1.94px;
        @media (max-width: 992px) {
            position: absolute;
            right: 30px;
        }
    }
`;

export default Navbar;
