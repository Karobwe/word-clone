import React from "react";

function GuessResult({userResponses}) {
  return (
    <div className="guess-results">
      {userResponses.map(response => {
        return <p key={response.id} className="guess">{response.word}</p>
      })}
    </div>
  );
}

export default GuessResult;
