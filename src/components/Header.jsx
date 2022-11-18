import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/klevvvers-logo.png';
import productIcon from '../images/header-icons/product-icon.png';
import languageIcon from '../images/header-icons/language-icon.png';
import codeIcon from '../images/header-icons/code-icon.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen((e) => !e);
  };

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
          <div className='desktopMenu'>
            <Link to='/' className='homeBtn'>
              <h3>Home</h3>
            </Link>
            <div
              className='categoryMenu'
              onMouseEnter={() => setDesktopMenuOpen(true)}
              onMouseLeave={() => setDesktopMenuOpen(false)}
            >
              <h3>Categories</h3>

              {desktopMenuOpen ? (
                <div className='categoryMenuOpen'>
                  <ul className='categoryItems'>
                    <li>
                      <Link to='product-description'>Product Description</Link>
                    </li>

                    <li>
                      <Link to='facebook-ads'>Facebook Ads</Link>
                    </li>

                    <li>
                      <Link to='google-ads'>Google Ads</Link>
                    </li>

                    <li>
                      <Link to='grammar-correction'>Grammar Correction</Link>
                    </li>

                    <li>
                      <Link to='javascript-helper'>JavaScript Helper</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
            <p className='LoginBtn'>login</p>
          </div>
        </div>
        {menuOpen ? (
          <div className='mobileModal'>
            <Link to='/' className='modalLogoDiv' onClick={handleClick}>
              <img src={logo} alt='klevvvers logo' />
            </Link>
            <div className='modalLinksContainer'>
              <Link to='/' onClick={handleClick}>
                Home Page
              </Link>
              <hr />
              <div className='categoryDiv'>
                <img
                  src={productIcon}
                  className='categoryIcons'
                  alt='product icon'
                />
                <p>Product</p>
              </div>

              <Link to='/product-description' onClick={handleClick}>
                Product Description
              </Link>
              <hr />
              <Link to='/facebook-ads' onClick={handleClick}>
                Facebook Ads
              </Link>
              <hr />
              <Link to='/google-ads' onClick={handleClick}>
                Google Ads
              </Link>
              <hr />
              <div className='categoryDiv'>
                <img
                  src={languageIcon}
                  className='categoryIcons'
                  alt='language icon'
                />
                <p>Language</p>
              </div>

              <Link to='/grammar-correction' onClick={handleClick}>
                Grammar Correction
              </Link>
              <hr />
              <div className='categoryDiv'>
                <img src={codeIcon} className='categoryIcons' alt='code icon' />
                <p>Code</p>
              </div>

              <Link to='/javascript-helper' onClick={handleClick}>
                JavaScript Helper
              </Link>
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
