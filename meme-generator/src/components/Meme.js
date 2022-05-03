import React from 'react';

export default function Meme(props) {
  const { url, topText, bottomText } = props;
  return (
    <div className="relative w-full h-full flex justify-center rounded-lg">
      <img src={url} alt="Selamlar" />
      <p className="absolute top-4 font-meme meme-shadow uppercase text-4xl text-white">
        {topText}
      </p>
      <p className="absolute bottom-4 font-meme meme-shadow uppercase text-4xl text-white">
        {bottomText}
      </p>
    </div>
  );
}
