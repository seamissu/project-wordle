import React from 'react';

function GuessInput({ submitHandler }) {
  const [input, setInput] = React.useState('');
  return (
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
        pattern="[A-Za-z]{5}"
        value={input}
        onChange={(event) => {
          setInput(event.target.value.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
