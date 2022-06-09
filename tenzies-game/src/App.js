import React, { useState, useCallback, useEffect } from 'react';

import Header from './components/Header';
import Dice from './components/Dice';

function App() {
  const [dices, setDices] = useState(drawBoard());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const firstValue = dices[0].number;
    const areAllDicesLocked = dices.every((dice) => dice.isLocked);
    const areAllDicesMatch = dices.every((dice) => dice.number === firstValue);

    if (areAllDicesLocked && areAllDicesMatch) setTenzies(true);
  }, [dices]);

  const holdDice = useCallback((id) => {
    setDices((oldDices) =>
      oldDices.map((dice) =>
        dice.id === id ? { ...dice, isLocked: !dice.isLocked } : dice,
      ),
    );
  }, []);

  function randomDiceValue() {
    return Math.ceil(Math.random() * 6);
  }

  function drawBoard() {
    const diceArray = [];
    for (let i = 0; i < 10; i += 1) {
      const newDice = {
        number: randomDiceValue(),
        isLocked: false,
        id: i,
      };
      diceArray.push(newDice);
    }

    return diceArray;
  }

  function rollUnheldDice() {
    setDices((oldDices) =>
      oldDices.map((dice) =>
        dice.isLocked ? dice : { ...dice, number: randomDiceValue() },
      ),
    );
  }

  function playAgain() {
    setTenzies(false);
    setDices(drawBoard());
  }

  return (
    <div className="p-6 mx-auto my-16 rounded-xl bg-neutral-100 grid place-items-center w-3/4 max-w-lg">
      <Header />
      <main className="grid grid-cols-5 gap-4 place-items-center mb-8">
        {dices.map((dice) => (
          <Dice
            key={dice.id}
            id={dice.id}
            isLocked={dice.isLocked}
            number={dice.number}
            holdDice={holdDice}
          />
        ))}
      </main>
      <footer>
        <button
          type="button"
          onClick={tenzies ? playAgain : rollUnheldDice}
          className="font-regular text-lg text-white bg-complementary px-12 py-3 rounded-xl shadow-xl"
        >
          {tenzies ? 'Play Again' : 'Roll'}
        </button>
      </footer>
    </div>
  );
}

export default App;
