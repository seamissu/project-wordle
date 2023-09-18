import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ obj }) {
  const classString = obj ? `${obj.status} cell` : 'cell';
  return (
    <span className={classString}>
      {obj ? obj.letter : undefined}
    </span>
  );
}

function Guess({ value, answer }) {
  const resultArray = checkGuess(
    value ? value.guess : undefined,
    answer
  );

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          obj={resultArray ? resultArray[num] : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
