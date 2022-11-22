import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/klevvvers-logo.png';
import productIcon from '../images/header-icons/product-icon.png';
import languageIcon from '../images/header-icons/language-icon.png';
import codeIcon from '../images/header-icons/code-icon.png';
import contactIcon from '../images/header-icons/contact-icon.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen((e) => !e);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header>
      <div className='headerContainer'>
        <Link to='/' className='logocontainer' onClick={scrollToTop}>
          <img src={logo} alt='klevvvers logo' />
        </Link>
        <div className='navDiv'>
          <div className='hamburgerDiv' onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='desktopMenu'>
            <Link to='/' className='homeBtn' onClick={scrollToTop}>
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
                      <Link to='product-description' onClick={scrollToTop}>
                        Product Description
                      </Link>
                    </li>

                    <li>
                      <Link to='facebook-ads' onClick={scrollToTop}>
                        Facebook Ads
                      </Link>
                    </li>

                    <li>
                      <Link to='google-ads' onClick={scrollToTop}>
                        Google Ads
                      </Link>
                    </li>

                    <li>
                      <Link to='grammar-correction' onClick={scrollToTop}>
                        Grammar Correction
                      </Link>
                    </li>

                    <li>
                      <Link to='javascript-helper' onClick={scrollToTop}>
                        JavaScript Helper
                      </Link>
                    </li>

                    <li>
                      <Link to='youtube-ideas' onClick={scrollToTop}>
                        Youtube Ideas
                      </Link>
                    </li>

                    <li>
                      <Link to='generate-summary' onClick={scrollToTop}>
                        Generate Summary
                      </Link>
                    </li>

                    <li>
                      <Link to='time-complexity' onClick={scrollToTop}>
                        Time Complexity
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
            <Link to='/contact' className='homeBtn' onClick={scrollToTop}>
              Contact
            </Link>
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
              <Link to='/youtube-ideas' onClick={handleClick}>
                Youtube Ideas
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
              <Link to='/generate-summary' onClick={handleClick}>
                Generate Summary
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
              <Link to='/time-complexity' onClick={handleClick}>
                Calculate Time Complexity
              </Link>
              <hr />
            </div>
            <Link to='/contact' id='contactLink' onClick={handleClick}>
              <img
                src={contactIcon}
                alt='contact icon'
                className='categoryIcons'
              />
              Contact
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}
