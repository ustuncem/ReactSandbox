import React from 'react';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <article className="text-center">
      <h1 className="font-bold mb-5 text-5xl">Quizzcle</h1>
      <p className="mb-7 text-lg">Description here if needed.</p>
      <Link to="/quiz" className="btn">
        Start Quiz!
      </Link>
    </article>
  );
}

export default Intro;
