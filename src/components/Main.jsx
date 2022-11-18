import React from 'react'
import { Routes, Route } from 'react-router-dom';
import FacebookAdsPage from '../pages/FacebookAdsPage/FacebookAdsPage';
import GoogleAds from '../pages/GoogleAds.jsx/GoogleAds';
import LandingPage from '../pages/LandingPage/LandingPage'
import ProductDescription from '../pages/ProductDescriptionPage/ProductDescriptionPage'

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/product-description' element={<ProductDescription />} />
        <Route path='/facebook-ads' element={<FacebookAdsPage />} />
        <Route path='/google-ads' element={<GoogleAds />} />
      </Routes>
    </main>
  )
}
