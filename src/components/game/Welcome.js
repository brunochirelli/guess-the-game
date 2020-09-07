import React from "react";

const Welcome = () => {
  return (
    <main className="mt-4">
      <h1>Guess, The Game</h1>
      <p>
        Let's play a game. I will guess your number from 1 to 100 in a maximum
        of 7 attempts. Choose your number now. Only respond if your number is{" "}
        <strong>higher</strong> or <strong>lower</strong> from my guess.
      </p>
    </main>
  );
};

export default Welcome;
