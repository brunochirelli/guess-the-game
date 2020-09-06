import React, { useEffect } from "react";
import { createGrid } from "./createGrid";

const NumbersGrid = () => {
  useEffect(() => {
    // console.log();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>{createGrid()}</div>
  );
};

export default NumbersGrid;
