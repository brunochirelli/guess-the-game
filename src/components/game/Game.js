import React from "react";
import Button from "react-bootstrap/Button";
import NumbersGrid from "./NumbersGrid";

const Game = () => {
  return (
    <div>
      <NumbersGrid />
      <Button>Higher</Button>
      <Button>Lower</Button>
    </div>
  );
};

export default Game;
