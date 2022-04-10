import React from 'react';
import logo from '../assets/airbnb-logo.svg';

export default function Navigation() {
  return (
    <header className="sticky top-0 z-10 bg-white">
      <nav className="px-7 py-5 shadow-md">
        <img src={logo} alt="Airbnb Logo" />
      </nav>
    </header>
  );
}
