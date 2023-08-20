import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResult({userResponses}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => {
        return <Guess key={rowIndex} word={userResponses[rowIndex]?.word} />
      })}
    </div>
  );
}

export default GuessResult;
