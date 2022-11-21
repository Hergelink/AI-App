import React from 'react'
import { Routes, Route } from 'react-router-dom';
import FacebookAdsPage from '../pages/AiGenerationPages/FacebookAdsPage';
import GoogleAds from '../pages/AiGenerationPages/GoogleAds';
import LandingPage from '../pages/LandingPage/LandingPage'
import ProductDescription from '../pages/AiGenerationPages/ProductDescriptionPage'
import GrammarCorrectionPage from '../pages/AiGenerationPages/GrammarCorrectionPage';
import JavaScriptHelperPage from '../pages/AiGenerationPages/JavaScriptHelperPage';
import YoutubeIdeas from '../pages/AiGenerationPages/YoutubeIdeas';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/product-description' element={<ProductDescription />} />
        <Route path='/facebook-ads' element={<FacebookAdsPage />} />
        <Route path='/google-ads' element={<GoogleAds />} />
        <Route path='/grammar-correction' element={<GrammarCorrectionPage />} />
        <Route path='/javascript-helper' element={<JavaScriptHelperPage />} />
        <Route path='/youtube-ideas' element={<YoutubeIdeas />} />
      </Routes>
    </main>
  )
}
