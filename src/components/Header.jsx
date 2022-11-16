import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/klevvvers-logo.png'
export default function Header() {
  return (
    <header>
      <div className='headerContainer'>
        <Link to='/' className='logocontainer' >
          <img src={logo} alt="klevvvers logo" />
        </Link>
        <Link to='/'>Home</Link>
   <Link to='/blog-content'>Blog content</Link>
      </div>
     
    </header>
  );
}


 