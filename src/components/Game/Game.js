import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResult from '../GuessResult/GuessResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userResponses, setUserResponses] = React.useState([]);

  const handleNewResponse = (response) => {
    const nextUserResponses = [...userResponses, {id: crypto.randomUUID(), word: response}];
    setUserResponses(nextUserResponses);
  }

  return (
    <>
      <GuessResult userResponses={userResponses} />

      <GuessInput onSubmitResponse={handleNewResponse} />
    </>
  );
}

export default Game;
