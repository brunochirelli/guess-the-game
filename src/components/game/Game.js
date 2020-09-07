import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Attempt from "./Attempt";
import Welcome from "./Welcome";

const Game = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [guess, setGuess] = useState(max / 2);
  const [attempts, setAttempts] = useState([]);
  const [attemptNumber, setAttemptNumber] = useState(1);
  const [stop, setStop] = useState(false);

  const handleReset = () => {
    setMin(1);
    setMax(100);
    setGuess(50);
    setAttempts([]);
    setAttemptNumber(1);
    setStop(false);
  };

  const handleAnswer = (e) => {
    if (!stop) {
      if (max - min <= 1) {
        setAttempts((prev) => [
          ...prev,
          <Attempt attempt={attemptNumber} guess={guess} success={true} />,
        ]);
        setStop(true);

        return;
      }

      switch (e.target.value) {
        case "higher":
          setMin(guess);
          setGuess((prev) => Math.ceil((max - prev) / 2) + prev);
          setAttemptNumber(attemptNumber + 1);
          setAttempts((prev) => [
            ...prev,
            <Attempt attempt={attemptNumber} guess={guess} success={false} />,
          ]);
          break;
        case "lower":
          setMax(guess);
          setGuess((prev) => Math.floor((prev - min) / 2) + min);
          setAttemptNumber(attemptNumber + 1);
          setAttempts((prev) => [
            ...prev,
            <Attempt attempt={attemptNumber} guess={guess} success={false} />,
          ]);
          break;
        case "right":
          setAttempts((prev) => [
            ...prev,
            <Attempt attempt={attemptNumber} guess={guess} success={true} />,
          ]);
          setStop(true);
          break;

        default:
          return;
      }
    } else {
      return;
    }
  };

  return (
    <Container style={{ maxWidth: "600px" }}>
      <Row>
        <Col>
          <Welcome />
        </Col>
      </Row>

      <Row>
        <Col>
          {stop ? (
            <div className="h4">
              <p>Your number is {guess}!</p>
              <p>
                I found it in{" "}
                <span style={{ color: "green" }}>{attemptNumber}</span>{" "}
                attempts.
              </p>
            </div>
          ) : (
            <div className="h5">Your number is {guess} ?</div>
          )}

          <div>
            {stop ? (
              <div>
                <Button
                  value="higher"
                  onClick={handleReset}
                  style={{ margin: "1rem 0.75rem 1rem 0" }}
                >
                  Reset
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  variant="primary"
                  value="higher"
                  style={{ margin: "1rem 0.75rem 1rem 0" }}
                  onClick={handleAnswer}
                >
                  Higher
                </Button>
                <Button
                  variant="secondary"
                  value="lower"
                  style={{ margin: "1rem 0.75rem 1rem 0" }}
                  onClick={handleAnswer}
                >
                  Lower
                </Button>
                <Button
                  variant="success"
                  value="right"
                  style={{ margin: "1rem 0.75rem 1rem 0" }}
                  onClick={handleAnswer}
                >
                  Correct!
                </Button>
              </div>
            )}
          </div>

          <div>
            {attempts.map((e, i) => (
              <div key={`attempt-${i}`}>{e}</div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Game;
