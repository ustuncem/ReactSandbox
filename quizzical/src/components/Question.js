import React from 'react';

function Question() {
  return (
    <article className="mb-4">
      <header>
        <h1 className="font-bold text-xl mb-2">
          How would one say goodbye in Spanish?
        </h1>
      </header>
      <div className="flex gap-x-4">
        <label
          htmlFor="answer1"
          className="px-2 py-1 relative cursor-pointer group"
        >
          <span className="font-medium relative z-10">Bilmem Ne</span>
          <input
            type="radio"
            name="answer1"
            id="answer1"
            value="Bilmem Ne"
            className="peer"
          />
          <span className="radio-button" />
        </label>
        <label
          htmlFor="answer2"
          className="px-2 py-1 relative cursor-pointer group"
        >
          <span className="font-medium relative z-10">Bilmem Ne</span>
          <input
            type="radio"
            name="answer1"
            id="answer2"
            value="Bilmem Ne"
            className="peer"
          />
          <span className="radio-button" />
        </label>
        <label
          htmlFor="answer3"
          className="px-2 py-1 relative cursor-pointer group"
        >
          <span className="font-medium relative z-10">Bilmem Ne</span>
          <input
            type="radio"
            name="answer1"
            id="answer3"
            value="Bilmem Ne"
            className="peer"
          />
          <span className="radio-button" />
        </label>
        <label
          htmlFor="answer4"
          className="px-2 py-1 relative cursor-pointer group"
        >
          <span className="font-medium relative z-10">Bilmem Ne</span>
          <input
            type="radio"
            name="answer1"
            id="answer4"
            value="Bilmem Ne"
            className="peer"
          />
          <span className="radio-button" />
        </label>
      </div>
    </article>
  );
}

export default Question;
