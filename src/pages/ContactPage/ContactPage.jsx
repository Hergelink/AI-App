import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Davinci from '../../components/Davinci';
import Forms from '../../components/Forms';

import './ContactPage.css';

export default function ContactPage() {
  const [ai, setAi] = useState(false);

  const handleGPT = () => {
    setAi((e) => !e);
  };

  return (
    <div id='form-page-container'>
      <div className='form-container-div'>
        <div id='contact-info-div'>
          <h1>Contact us.</h1>
          <p>Feel free to contact us for your questions or recommendations. </p>
          <p>
            <p>
              Or better yet contact
              <button id='gpt3' onClick={handleGPT}>
                Davinci
              </button>
              the Ai model that you have been using if you tried our products.
            </p>
            Visit the
            <Link to='/' id='link-to-faq'>
              FAQ
            </Link>
            page for frequently asked questions.
          </p>
        </div>
        {!ai ? (
          <Forms />
        ) : (
          <div id='davinciContainer'>
            <Davinci />
            <button id='bringBackButton' onClick={handleGPT}>
              Bring me back to the Contact Form
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
