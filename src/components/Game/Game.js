import React from 'react';

import GuessInput from '../GuessInput';
import InputList from '../InputList/InputList';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [inputList, setInputList] = React.useState([]);

  function submitHandler(input) {
    const inputItem = { label: input, id: crypto.randomUUID() };
    const nextInputList = [...inputList, inputItem];
    setInputList(nextInputList);
  }

  return (
    <>
      <InputList inputList={inputList} />
      <GuessInput submitHandler={submitHandler} />
    </>
  );
}

export default Game;
