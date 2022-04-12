import React from 'react';

import Header from './components/Header';
import Generator from './components/Generator';
import Meme from './components/Meme';

function App() {
  return (
    <div>
      <Header />
      <main className="max-w-xl mx-auto px-9 py-4">
        <Generator />
      </main>
    </div>
  );
}

export default App;
