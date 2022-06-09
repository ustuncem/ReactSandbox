import React from 'react';

function Header() {
  return (
    <header className="text-center mb-4">
      <h1 className="font-bold text-3xl tracking-tight mb-4">Tenzies</h1>
      <p className="text-secondary mx-auto max-w-[75%]">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
    </header>
  );
}

export default Header;
