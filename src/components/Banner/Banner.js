import React from 'react';

function Banner({ isCorrect, numOfGuess, answer }) {
  const goodResult = isCorrect === true && numOfGuess <= 6;
  const badResult = numOfGuess >= 6 && isCorrect === false;

  return (
    <React.Fragment>
      {goodResult && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in {''}
            <strong>{numOfGuess} guesses</strong>.
          </p>
        </div>
      )}
      {badResult && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is
            <strong> {answer}</strong>.
          </p>
        </div>
      )}
    </React.Fragment>
  );
}

export default Banner;
