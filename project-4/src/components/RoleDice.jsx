import React, { useState } from "react";
import Rules from "./Rules";

const RoleDice = ({ currentDice, handleClick, error, setScore }) => {
  const [showRules, setShowRules] = useState(false);

  return (
    <section className="flex h-5/6 flex-col items-center justify-center gap-5">
      <div className="cursor-pointer text-center" onClick={handleClick}>
        <h1 className="text-red-500">{error}</h1>
        <img src={`/images/dice_${currentDice}.png`} alt="dice-1" />
        <p className="text-2xl font-medium">click on Dice to roll</p>
      </div>

      <div className="btn flex flex-col gap-3">
        <button
          className="cursor-pointer rounded-lg border-2 px-16 py-2"
          onClick={() => setScore(0)}
        >
          Reset Score
        </button>
        <button
          className="cursor-pointer rounded-lg border-2 bg-black px-16 py-2 text-white"
          onClick={() => setShowRules((prev) => !prev)}
        >
          Show Rule
        </button>
      </div>
      {showRules && <Rules />}
    </section>
  );
};

export default RoleDice;
