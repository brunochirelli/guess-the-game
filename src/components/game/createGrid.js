import React from "react";

export const createGrid = (gameArea) => {
  let start = 1;
  let end = 100;
  let grid = [];

  while (start <= end) {
    grid.push(
      <div
        key={start}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: gameArea / 10,
          height: gameArea / 10,
          border: "1px solid gray",
        }}
      >
        {start}
      </div>
    );
    start++;
  }

  return <>{createGrid(gameArea)}</>;
};
