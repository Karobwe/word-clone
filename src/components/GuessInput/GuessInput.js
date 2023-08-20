import React from "react";

function GuessInput({onSubmitResponse}) {
  const [guessInput, setGuessInput] = React.useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // Prevent empty string
    if(guessInput.length === 0) return;

    console.log({guess: guessInput});
    onSubmitResponse(guessInput);
    setGuessInput("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={formSubmitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        pattern="[a-zA-Z]{5,5}"
        value={guessInput}
        onChange={event => {
          // Prevent answer with more than 5 letters
          if(event.target.value.length > 5) return;

          const nextGuessInput = event.target.value.toUpperCase();
          setGuessInput(nextGuessInput);
        }}
      />
    </form>
  );
}

export default GuessInput;
