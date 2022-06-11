import React from 'react';
import { Outlet } from 'react-router-dom';

import blueBlob from './assets/blobs-blue.svg';
import yellowBlob from './assets/blobs-yellow.svg';

function App() {
  return (
    <main className="relative h-full grid place-items-center p-12">
      <img
        src={blueBlob}
        alt="Blue Blob that rotates!"
        loading="lazy"
        className="absolute -bottom-20 -left-20 motion-safe:animate-spin-slow"
      />
      <div className="relative z-10">
        <Outlet />
      </div>
      <img
        src={yellowBlob}
        alt="Yellow Blob that rotates!"
        loading="lazy"
        className="absolute -top-20 -right-20 motion-safe:animate-spin-slow"
      />
    </main>
  );
}

export default App;
