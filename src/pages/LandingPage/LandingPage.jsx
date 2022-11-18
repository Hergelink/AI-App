import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

import heroImage from '../../images/hero-image.png'

export default function LandingPage() {
  return (
    <div className='productDiv'>
      <div className='informationContainer'>
        <h1>Generate text content on demand with the help of AI</h1>
        <h4>
          AI powered software that generates ad copy, product descriptions,
          sales copy, blog paragraphs, video scripts more.
        </h4>

        <div className='coverImageContainer'>
          <img src={heroImage} alt='ai drawn' />
        </div>

        <p id='trustedP'>Trusted by high performing brands</p>
        <hr className='landingPageHr' />

        <div className='thirdInfoDiv'>
          <h3>Automatically generate unique and human-like copy in seconds.</h3>
          <p>Built on top of the world’s most advanced AI language model.</p>
        </div>

        <div className='featuresDiv'>
          <div className='featureItem'>
          <div className='featureItemContext'>
            <h3>Product description generator</h3>
            <p>Generate product decriptions for your need.</p>
            </div>
            <Link to='/product-description' className='checkItOutBtn'>
              Check it out!
            </Link>
          </div>

          <div className='featureItem'>
          <div className='featureItemContext'>
            <h3>Facebook Ads generator</h3>
            <p>Generate Facebook ad copies fast & simple.</p>
            </div>
            <Link to='/facebook-ads' className='checkItOutBtn'>
              Check it out!
            </Link>
          </div>

          <div className='featureItem'>
          <div className='featureItemContext'>
            <h3>Google Ads generator</h3>
            <p>Generate Google ad copies fast & simple.</p>
            </div>
            <Link to='/product-description' className='checkItOutBtn'>
              Check it out!
            </Link>
          </div>

          <div className='featureItem'>
            <div className='featureItemContext'>
              <h3>Grammar Correction</h3>
              <p>
                Correct your sentences with the help of the most powerful
                language neural network.
              </p>
            </div>
            <Link to='/grammar-correction' className='checkItOutBtn'>
              Check it out!
            </Link>
          </div>

          <div className='featureItem'>
            <div className='featureItemContext'>
              <h3>JavaScript helper</h3>
              <p>Let AI help you with your JavaScript problems.</p>
            </div>

            <Link to='/javascript-helper' className='checkItOutBtn'>
              Check it out!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
