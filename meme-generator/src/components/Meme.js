import React from 'react';

export default function Meme(props) {
  const { url } = props;
  return (
    <div
      className="relative w-full h-96 bg-cover bg-no-repeat bg-center flex justify-center rounded-lg"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <p className="absolute top-4 font-meme meme-shadow uppercase text-4xl text-white">
        Shut up
      </p>
      <p className="absolute bottom-4 font-meme meme-shadow uppercase text-4xl text-white">
        Bottom Text
      </p>
    </div>
  );
}
