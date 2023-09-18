import React from 'react';
import { range } from '../../utils';

function Guess({ value }) {
  const string = value ? value.label : undefined;
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {string ? string[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
