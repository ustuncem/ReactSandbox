import React from 'react';
import mainBanner from '../assets/main-banner.png';

export default function Hero() {
  return (
    <section className="mb-12">
      <img
        className="mb-8  w-full"
        src={mainBanner}
        alt="Collage from various artists."
      />
      <h1 className="text-4xl font-semibold mb-4 text-black">
        Online Experiences
      </h1>
      <p className="font-light max-w-xs">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
