import React from 'react';

import GuessInput from '../GuessInput';
import InputList from '../InputList';
import Banner from '../Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

let isCorrect;

function Game() {
  const [inputList, setInputList] = React.useState([]);
  const [numOfGuess, setNumOFGuess] = React.useState(0);
  function submitHandler(input) {
    const newItem = {
      guess: input,
      id: crypto.randomUUID(),
    };
    const nextInputList = [...inputList, newItem];
    setInputList(nextInputList);
    setNumOFGuess(numOfGuess + 1);
    isCorrect = input === answer;
  }

  return (
    <>
      <InputList inputList={inputList} answer={answer} />
      <GuessInput
        isCorrect={isCorrect}
        numOfGuess={numOfGuess}
        submitHandler={submitHandler}
      />
      <Banner
        isCorrect={isCorrect}
        numOfGuess={numOfGuess}
        answer={answer}
      />
    </>
  );
}

export default Game;
