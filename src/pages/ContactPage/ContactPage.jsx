import React from 'react'
import { Link } from 'react-router-dom';
import Forms from '../../components/Forms'

import './ContactPage.css';

export default function ContactPage() {
  return (
    <div id='form-page-container'>
    <div className='form-container-div'>
      <div id='contact-info-div'>
        <h1>Contact us. 🦜</h1>
        <p>Feel free to contact us for your questions or recommendations.</p>
        <p>
          Visit the
          <Link to='/' id='link-to-faq'>
            FAQ
          </Link>
          page for frequently asked questions.
        </p>
      </div>
      <Forms />
    </div>
  </div>
  )
}
