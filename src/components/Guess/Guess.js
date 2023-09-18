import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const classString = status ? `${status} cell` : 'cell';
  return <span className={classString}>{letter}</span>;
}

function Guess({ value, answer }) {
  const statusArray = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={statusArray ? statusArray[num].letter : undefined}
          status={statusArray ? statusArray[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
