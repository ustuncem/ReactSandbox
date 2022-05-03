import React, { useState, useEffect } from 'react';
import Meme from './Meme';

export default function Generator() {
  const [memes, setMemes] = useState([]);
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg',
  });
  const [formData, setFormData] = useState({
    topText: '',
    bottomText: '',
  });

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  /**
   * Handles form change
   */
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getMemeImage = () => {
    const randomIndex = Math.floor(Math.random() * memes.length);

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: memes[randomIndex].url,
    }));
  };

  return (
    <>
      <form className="mb-9">
        <div className="grid grid-cols-2 place-items-stretch gap-x-5 mb-5">
          <input
            type="text"
            className="input"
            placeholder="Top Text"
            name="topText"
            onChange={handleChange}
          />
          <input
            type="text"
            className="input"
            placeholder="Bottom Text"
            name="bottomText"
            onChange={handleChange}
          />
        </div>
        <button
          onClick={getMemeImage}
          className="w-full bg-gradient-to-r from-purple-850 to-purple-750 p-3 rounded-lg text-white font-bold tracking-tight"
          type="button"
        >
          Get a new meme image 🖼️
        </button>
      </form>
      <Meme
        url={meme.randomImage}
        topText={formData.topText}
        bottomText={formData.bottomText}
      />
    </>
  );
}
