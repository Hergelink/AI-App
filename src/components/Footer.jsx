import React from 'react'
import { Link } from 'react-router-dom';
import cubeLogo from '../images/klevvvers-cube.png';
import homeIcon from '../images/header-icons/home-icon.png';
import contactIcon from '../images/header-icons/contact-icon.png';

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
  }
  return (
    <footer>
      
      <Link className="footerLogoDiv" to='/' onClick={scrollToTop}>
        <img src={cubeLogo} alt="klevvvers logo" id='footerLogo' />
        <h3>Klevvvers</h3>
      </Link>
      <div className="footerLinksContainer">
        <Link to='/' onClick={scrollToTop}>
          <img src={homeIcon} alt="home icon" className='footerIcons' />
          Home</Link>
        <Link to='/contact' onClick={scrollToTop}>
          <img src={contactIcon} alt="contact icon" className='footerIcons' />
          Contact</Link>
      </div>

     

    
      <h4>Created by <a id='hergelink' href='https://github.com/Hergelink' target='_blank' rel='noreferrer'>Hergelink</a></h4>
    </footer>
  )
}
