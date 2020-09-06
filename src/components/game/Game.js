import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import NumbersGrid from "./NumbersGrid";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Game = () => {
  // const [gameArea, setGameArea] = useState(50);
  const [guess, setGuess] = useState(50);
  const [option, setOption] = useState(null);

  const getAnswear = (e) => {
    switch (e.target.value) {
      case "higher":
        setGuess(Math.ceil((100 - guess) / 2 + guess));
        break;
      case "lower":
        setGuess(Math.floor(guess / 2));
        break;
      case "right":
        alert("Acertei fdp");
        break;

      default:
        console.log("nothing matches");
    }
  };

  useEffect(() => {
    // setGameArea(document.getElementById("area").offsetWidth);
  }, []);
  return (
    <>
      <div>Your number is {guess} ?</div>
      <div>
        <Button
          variant="primary"
          value="higher"
          style={{ margin: "1rem 0.75rem 1rem 0" }}
          onClick={getAnswear}
        >
          Higher
        </Button>
        <Button
          variant="secondary"
          value="lower"
          style={{ margin: "1rem 0.75rem 1rem 0" }}
          onClick={getAnswear}
        >
          Lower
        </Button>
        <Button
          variant="success"
          value="right"
          style={{ margin: "1rem 0.75rem 1rem 0" }}
          onClick={getAnswear}
        >
          Correct!
        </Button>
      </div>
    </>
  );
};

export default Game;
