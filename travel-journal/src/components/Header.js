import React from 'react';
import logo from '../assets/world.svg';

export default function Header() {
  return (
    <header className="flex justify-center items-center py-5 bg-red-350 mb-7">
      <img src={logo} alt="Logo" className="mr-2 w-6" />
      <h1 className="text-white font-medium text-base tracking-tight">
        my travel journal.
      </h1>
    </header>
  );
}
