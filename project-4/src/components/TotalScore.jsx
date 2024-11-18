import React from "react";

const TotalScore = ({ score }) => {
  return (
    <div className="w-52 text-center">
      <h1 className="text-8xl font-bold">{score}</h1>
      <p className="text-[24px] font-medium">Total Score</p>
    </div>
  );
};

export default TotalScore;
