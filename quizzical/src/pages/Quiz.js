import React, { useState, useEffect, useCallback } from 'react';

import Question from '../components/Question';
import getQuestion from '../services/quizService';
import shuffleArray from '../helpers/shuffleArray';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [finished, setFinished] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);

  const setAnswer = useCallback(
    (event, id) =>
      setQuestions((prev) =>
        prev.map((question) =>
          question.id === id
            ? {
                ...question,
                userAnswer: event.target.value,
                isCorrect: question.correctAnswer === event.target.value,
              }
            : question,
        ),
      ),
    [],
  );

  useEffect(() => {
    (async () => {
      await getAndParseQuestions();
    })();
  }, [playAgain]);

  async function getAndParseQuestions() {
    const questionData = await getQuestion();
    const parsedQuestions = questionData.results.map((item, i) => ({
      id: `answer_${i}`,
      text: item.question,
      answers: shuffleArray([...item.incorrect_answers, item.correct_answer]),
      correctAnswer: item.correct_answer,
      userAnswer: '',
    }));
    setQuestions(parsedQuestions);
  }

  function handlePlayAgain() {
    setFinished(false);
    setPlayAgain((prev) => !prev);
  }

  function checkAnswers() {
    setFinished(true);
  }

  function getTrueAnswerCount() {
    return questions.filter((question) => question.isCorrect).length;
  }

  return (
    <form className="w-full max-w-3xl">
      {questions.map((question) => (
        <Question
          question={question}
          key={question.id}
          onChange={setAnswer}
          finished={finished}
        />
      ))}
      <div className="flex justify-center items-center">
        {finished && (
          <p className="mr-6 font-bold text-xl">
            You scored {getTrueAnswerCount()}/{questions.length} correct answers
          </p>
        )}
        <button
          type="button"
          className="btn"
          onClick={finished ? handlePlayAgain : checkAnswers}
        >
          {finished ? 'Play Again' : 'Check Answers'}
        </button>
      </div>
    </form>
  );
}

export default Quiz;
