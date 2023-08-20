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
  const [guessCount, setGuessCount] = React.useState(0);
  const [hasWin, setHasWin] = React.useState(false);
  const [hasFinished, setHasFinished] = React.useState(false);

  const handleNewResponse = (response) => {
    if(response === answer) {
      setHasWin(true);
      setHasFinished(true);
      return
    }

    if(userResponses.length === NUM_OF_GUESSES_ALLOWED) {
      setHasFinished(true);
      return;
    };

    const nextGuessCount = guessCount + 1;
    setGuessCount(nextGuessCount)

    const nextUserResponses = [...userResponses, {id: crypto.randomUUID(), word: response}];
    setUserResponses(nextUserResponses);
  }

  return (
    <>
      <GuessResult userResponses={userResponses} answer={answer} />

      <GuessInput onSubmitResponse={handleNewResponse} guessCount={guessCount} hasFinished={hasFinished} hasWin={hasWin} />
    </>
  );
}

export default Game;
