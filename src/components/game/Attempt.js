import React from "react";
import "./Attempt.scss";

const Attempt = ({ attempt, guess, success }) => {
  return (
    <div className={success ? "success" : "failure"}>
      Attempt: {attempt}, guess: {guess}
    </div>
  );
};

export default Attempt;
