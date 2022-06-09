import React, { memo } from 'react';

function Dice(props) {
  const { isLocked, number, holdDice, id } = props;

  return (
    <button
      type="button"
      className={`w-16 transition-colors font-medium text-2xl aspect-square shadow-md grid place-items-center ${
        isLocked ? 'bg-green-400' : 'bg-white'
      } rounded-xl cursor-pointer selection:bg-none`}
      onClick={() => holdDice(id)}
    >
      {number}
    </button>
  );
}

export default memo(Dice);
