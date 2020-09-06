import React from "react";

export const createGrid = () => {
  let guess = 50;
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
          width: "9vw",
          height: "9vw",
          border: "1px solid gray",

          opacity: start <= guess ? "0.3" : "1",
        }}
      >
        {start}
      </div>
    );
    start++;
  }

  return grid;
};
