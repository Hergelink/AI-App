import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import aiImage from '../../images/ai-img.png';

export default function LandingPage() {
  return (
    <div>
      <div className='informationContainer'>
        <h1>Generate text content on demand with the help of AI</h1>
        <h4>
          AI powered software that generates ad copy, product descriptions,
          sales copy, blog paragraphs, video scripts more.
        </h4>

        <div className='coverImageContainer'>
          <img src={aiImage} alt='ai drawn' />
        </div>

        <p id='trustedP'>Trusted by high performing brands</p>
        <hr className='landingPageHr'/>

        <div className='thirdInfoDiv'>
          <h3>Automatically generate unique and human-like copy in seconds.</h3>
          <p>Built on top of the world’s most advanced AI language model.</p>
        </div>

        <div className='featuresDiv'>
          <div className='featureItem'>
            <h3>Product description generator</h3>
            <p>generate product decriptions for your need.</p>
            <Link to='/blog-content' className='checkItOutBtn'>Check it out!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
