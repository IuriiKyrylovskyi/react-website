import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SiFloatplane } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import './navbar.scss';
import Button from '../button/Button';

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [isButton, setIsButton] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const closeMobileMenu = () => {
    setIsClicked(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setIsButton(false);
    } else {
      setIsButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', showButton);
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          {' KY '} <SiFloatplane />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {isClicked ? <CgClose className="times" /> : <GiHamburgerMenu className="bars" />}
        </div>
        <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        {isButton && <Button buttonStyle="btn--outline">Sign Up</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
