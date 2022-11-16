import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header>
      <p>Generate Content With AI</p>
      <Link to='/'>Home</Link>
      <Link to='/blog-content'>Blog content</Link>
    </header>
  );
}
