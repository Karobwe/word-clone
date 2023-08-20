import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from '../GuessInput/GuessInput';
import GuessResult from '../GuessResult/GuessResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userResponses, setUserResponses] = React.useState([]);

  const handleNewResponse = (response) => {
    if(userResponses.length === NUM_OF_GUESSES_ALLOWED) return;

    const nextUserResponses = [...userResponses, {id: crypto.randomUUID(), word: response}];
    setUserResponses(nextUserResponses);
  }

  return (
    <>
      <GuessResult userResponses={userResponses} answer={answer} />

      <GuessInput onSubmitResponse={handleNewResponse} />
    </>
  );
}

export default Game;
