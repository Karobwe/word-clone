import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({word, answer}) {
  let isValidWord = typeof word === "string" && word.length === 5;

  return (
    <p className="guess">
      {range(5).map((cell) => {
        let status = isValidWord && Object.values(checkGuess(word, answer))[cell].status;

        return <span key={cell} className={`cell ${status}`}>{word?.charAt(cell)}</span>
      })}
    </p>
  );
}

export default Guess;
