import React from "react";
import Container from "react-bootstrap/Container";
import Game from "./Game";

const Welcome = () => {
  return (
    <Container>
      <h1>Let's play a game?</h1>
      <p>
        Let's play a game. I will guess your number from 1 to 100 in a maximum
        of 7 attempts. Choose your number now. Only respond if your number is
        higher or lower from my guess.
      </p>
      <br></br>
      <Game />
    </Container>
  );
};

export default Welcome;