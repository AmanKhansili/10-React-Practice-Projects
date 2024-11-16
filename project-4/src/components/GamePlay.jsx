import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();

  const generateRandom = (min, max) => {
    return Math.floor(min + Math.random() * max);
  };
  const handleClick = () => {
    if (!selectedValue) {
      return setError("Plese first select a number");
    } else {
      setError("");
    }

    const randomNumber = generateRandom(1, 6);
    setCurrentDice(randomNumber);

    if (selectedValue === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => (prev <= 0 ? 0 : prev - 2));
    }
  };

  return (
    <main className="w-full h-screen">
      <div className="px-10 flex justify-between items-center">
        <TotalScore score={score} />
        <NumberSelector selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
      </div>
      <RoleDice currentDice={currentDice} handleClick={handleClick} error={error} />
    </main>
  );
};

export default GamePlay;
