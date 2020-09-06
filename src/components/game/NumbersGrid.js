import React from "react";
import "./NumbersGrid.scss";

const NumbersGrid = ({ gameArea, ...others }) => {
  const createGrid = () => {
    let start = 1;
    let end = 100;
    let grid = [];

    while (start <= end) {
      grid.push(
        <div
          key={start}
          className="grid-cell"
          style={{
            width: gameArea / 10,
            height: gameArea / 10,
          }}
        >
          {start}
        </div>
      );
      start++;
    }

    return grid;
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }} {...others}>
      {createGrid()}
    </div>
  );
};

export default NumbersGrid;
