import React, { useState, useEffect } from 'react';

import Question from '../components/Question';
import getQuestion from '../services/quizService';

function Quiz() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    (async () => {
      const questionData = await getQuestion();
      const parsedQuestions = questionData.map((item) => ({
        question: item.question,
        answers: [...item.incorrect_answers, item.correct_answer],
      }));
      setQuestions(parsedQuestions);
    })();
  }, []);

  console.log(questions);

  return (
    <div>
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
    </div>
  );
}

export default Quiz;
