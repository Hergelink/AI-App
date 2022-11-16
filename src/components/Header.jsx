import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header>
      <h1>Generate Content With AI</h1>
      <Link to='/'>Home</Link>
      <Link to='/blog-content'>Blog content</Link>
    </header>
  );
}
