import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage'
import ProductDescription from '../pages/BlogContentPage/ProductDescriptionPage'

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/product-description' element={<ProductDescription />} />
      </Routes>
    </main>
  )
}
