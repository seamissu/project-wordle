import React from 'react';

function GuessInput({ submitHandler, isCorrect, numOfGuess }) {
  const [input, setInput] = React.useState('');
  const goodResult = isCorrect === true && numOfGuess <= 6;
  const badResult = numOfGuess >= 6 && isCorrect === false;
  const overResult = goodResult || badResult; //WHEN GAMA IS OVER

  return (
    <React.Fragment>
      {!overResult && (
        <form
          className="guess-input-wrapper"
          onSubmit={(event) => {
            event.preventDefault();
            submitHandler(input);
            setInput('');
          }}
        >
          <label htmlFor="guess-input">Enter Guess:</label>
          <input
            id="guess-input"
            type="text"
            minLength={5}
            maxLength={5}
            pattern="[A-Za-z]{5}"
            value={input}
            onChange={(event) => {
              setInput(event.target.value.toUpperCase());
            }}
          ></input>
        </form>
      )}
    </React.Fragment>
  );
}

export default GuessInput;
