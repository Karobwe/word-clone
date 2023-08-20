import React from "react";

function Guess({word}) {
  return (
    <p className="guess">
      <span className="cell">{word?.charAt(0)}</span>
      <span className="cell">{word?.charAt(1)}</span>
      <span className="cell">{word?.charAt(2)}</span>
      <span className="cell">{word?.charAt(3)}</span>
      <span className="cell">{word?.charAt(4)}</span>
    </p>
  );
}

export default Guess;
