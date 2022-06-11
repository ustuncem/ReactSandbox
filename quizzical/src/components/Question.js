import React, { memo } from 'react';
import { nanoid } from 'nanoid';

import createMarkup from '../helpers/createMarkup';

function Question({ question, onChange, finished }) {
  const { answers, id, text, userAnswer, correctAnswer } = question;

  function determineClass(answer) {
    if (finished && answer === correctAnswer)
      return 'border-0 bg-green-400 peer-checked:bg-green-400 peer-hover:bg-green-400';

    if (finished && answer !== correctAnswer && answer === userAnswer)
      return 'border-0 bg-red-400 peer-checked:bg-red-400 peer-hover:bg-red-400';

    return '';
  }

  return (
    <article className="mb-8">
      <header>
        <h1
          className="font-bold text-xl mb-2"
          dangerouslySetInnerHTML={createMarkup(text)}
        />
      </header>
      <div className="flex gap-x-4">
        {answers.map((answer, i) => (
          <label
            htmlFor={`${id}_${i}`}
            key={nanoid()}
            className={`px-2 pl-3 py-1 relative text-center group ${
              !finished && 'cursor-pointer'
            }`}
          >
            <span
              className={`font-medium relative z-10 ${
                finished &&
                answer !== correctAnswer &&
                answer === userAnswer &&
                'line-through'
              }`}
              dangerouslySetInnerHTML={createMarkup(answer)}
            />
            <input
              type="radio"
              name={`${id}`}
              id={`${id}_${i}`}
              value={answer}
              checked={answer === userAnswer}
              className="peer"
              disabled={finished}
              onChange={(event) => onChange(event, id)}
            />
            <span
              className={`${
                !finished ? 'radio-button' : 'radio-button-disabled'
              } ${determineClass(answer)}`}
            />
          </label>
        ))}
      </div>
    </article>
  );
}

export default memo(Question);
