import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage'
import BlogContent from '../pages/BlogContentPage/BlogContentPage'

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/blog-content' element={<BlogContent />} />
      </Routes>
    </main>
  )
}
