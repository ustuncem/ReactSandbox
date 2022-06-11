import React from 'react';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <article className="text-center">
      <h1 className="font-bold mb-5 text-5xl">Quizzcle</h1>
      <p className="mb-7 text-lg">Description here if needed.</p>
      <Link
        to="/quiz"
        className="py-3 px-8 bg-primary-200 text-white rounded-xl transition-colors hover:bg-primary-100 hover:text-primary-300"
      >
        Start Quiz!
      </Link>
    </article>
  );
}

export default Intro;
