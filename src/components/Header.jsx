import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/klevvvers-logo.png';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className='headerContainer'>
        <Link to='/' className='logocontainer'>
          <img src={logo} alt='klevvvers logo' />
        </Link>
        <div className='navDiv'>
          <div className='hamburgerDiv' onClick={() => setMenuOpen((e) => !e)}>
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
              <Link to='/'>Home Page</Link>
              <hr />
              <Link to='/product-description'>Product Description</Link>
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
