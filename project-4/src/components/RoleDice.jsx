import React, { useState } from "react";
import Rules from "./Rules";

const RoleDice = ({ currentDice, handleClick, error, setScore }) => {
  const [showRules, setShowRules] = useState(false);

  return (
    <section className="h-5/6 flex flex-col items-center justify-center gap-5">
      <div className="text-center cursor-pointer" onClick={handleClick}>
        <h1 className="text-red-500">{error}</h1>
        <img src={`/images/dice_${currentDice}.png`} alt="dice-1" />
        <p className="font-medium text-2xl">click on Dice to roll</p>
      </div>

      <div className="btn flex flex-col gap-3">
        <button
          className="px-16 py-2 rounded-lg border-2 cursor-pointer"
          onClick={() => setScore(0)}
        >
          Reset Score
        </button>
        <button
          className="bg-black text-white px-16 py-2 rounded-lg border-2 cursor-pointer"
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
