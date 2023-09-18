import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const classString = status ? `${status} cell` : 'cell';
  return <span className={classString}>{letter}</span>;
}

function Guess({ value, answer }) {
  const resultArray = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={resultArray ? resultArray[num].letter : undefined}
          status={resultArray ? resultArray[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
