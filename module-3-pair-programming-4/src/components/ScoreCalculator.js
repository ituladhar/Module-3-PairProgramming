import React from "react";

function ScoreCalculator({ score , questions}) {
  return (
    <div className="score">
        <p className=" score--detail"> Problem: {questions}  / 10  |  Score: {score}</p>
    </div>
  );
}

export default ScoreCalculator;
