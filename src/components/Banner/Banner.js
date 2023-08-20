import React from "react";

function Banner({guessCount, hasWin = false}) {
  return (
    <div className={`${hasWin ? "happy" : "sad"} banner`}>
      {
        hasWin &&
        <p>
          <strong>Congratulations!</strong> Got it in 
          <strong> {guessCount} guesses</strong>.
        </p>
      }

      {!hasWin && <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>}
    </div>
  );
}

export default Banner;
