import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

import heroImage from '../../images/hero-image.png';
import productIcon from '../../images/header-icons/product-icon.png';
import languageIcon from '../../images/header-icons/language-icon.png';
import facebookIcon from '../../images/title-icons/facebook-icon.png';
import googleIcon from '../../images/title-icons/google-icon.png';
import javascriptIcon from '../../images/title-icons/javascript-icon.png';
import youtubeIcon from '../../images/title-icons/youtube-icon.png';

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
          <p>
            Built on top of the world’s most advanced AI language model GPT-3.
          </p>
        </div>

        <div className='featuresDiv'>
          <Link to='/product-description' className='featureItem'>
            <div className='featureItemContext'>
              <img src={productIcon} alt='product icon' />
              <h3>Product description generator</h3>
              <p>Generate product decriptions for your need.</p>
            </div>
          </Link>

          <Link to='/facebook-ads' className='featureItem'>
            <div className='featureItemContext'>
              <img src={facebookIcon} alt='facebook icon' />
              <h3>Facebook Ads generator</h3>
              <p>Generate Facebook ad copies fast & simple.</p>
            </div>
          </Link>

          <Link to='/product-description' className='featureItem'>
            <div className='featureItemContext'>
              <img src={googleIcon} alt='google icon' />
              <h3>Google Ads generator</h3>
              <p>Generate Google ad copies fast & simple.</p>
            </div>
          </Link>

          <Link to='/youtube-ideas' className='featureItem'>
            <div className='featureItemContext'>
              <img src={youtubeIcon} alt='youtube icon' />
              <h3>Youtube Idea generator</h3>
              <p>Generate Youtube titles, video topics and thumbnails. </p>
            </div>
          </Link>

          <Link className='featureItem' to='/grammar-correction'>
            <div className='featureItemContext'>
              <img src={languageIcon} alt='language icon' />
              <h3>Grammar Correction</h3>
              <p>
                Correct your sentences with the help of the most powerful
                language neural network.
              </p>
            </div>
          </Link>

          <Link className='featureItem' to='/javascript-helper'>
            <div className='featureItemContext'>
              <img src={javascriptIcon} alt='javascript icon' />
              <h3>JavaScript helper</h3>
              <p>Let AI help you with your JavaScript problems.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
