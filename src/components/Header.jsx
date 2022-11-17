import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/klevvvers-logo.png';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(e => !e);
  }
 
  return (
    <header>
      <div className='headerContainer'>
        <Link to='/' className='logocontainer'>
          <img src={logo} alt='klevvvers logo' />
        </Link>
        <div className='navDiv'>
          <div className='hamburgerDiv' onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {menuOpen ? (
          <div className='mobileModal'>
            <div className='modalLogoDiv'>
              <img src={logo} alt='klevvvers logo' />
            </div>
            <div className='modalLinksContainer'>
              <Link to='/' onClick={handleClick}>Home Page</Link>
              <hr />
              <Link to='/product-description' onClick={handleClick}>Product Description</Link>
              <hr />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}
