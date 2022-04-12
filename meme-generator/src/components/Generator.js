import React, { useState } from 'react';
import Meme from './Meme';

import memeData from '../memeData';

export default function Generator() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg',
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData);

  const getMemeImage = () => {
    const DATA = memeData.data.memes;
    const randomIndex = Math.floor(Math.random() * DATA.length);

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: DATA[randomIndex].url,
    }));
  };

  return (
    <>
      <form className="mb-9">
        <div className="grid grid-cols-2 place-items-stretch gap-x-5 mb-5">
          <input type="text" className="input" placeholder="Top Text" />
          <input type="text" className="input" placeholder="Bottom Text" />
        </div>
        <button
          onClick={getMemeImage}
          className="w-full bg-gradient-to-r from-purple-850 to-purple-750 p-3 rounded-lg text-white font-bold tracking-tight"
          type="button"
        >
          Get a new meme image 🖼️
        </button>
      </form>
      <Meme url={meme.randomImage} />
    </>
  );
}
