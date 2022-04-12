import React from 'react';
import logo from '../assets/trollface.svg';

export default function Header() {
  return (
    <header className="p-5 bg-gradient-to-r from-purple-850 to-purple-750 flex items-center justify-between mb-5">
      <h1 className="text-white text-xl font-bold tracking-tighter flex items-center">
        <img src={logo} alt="Trollface Logo" className="mr-2 w-10" />
        Meme Generator
      </h1>
      <p className="text-white">React Course - Project 3</p>
    </header>
  );
}
