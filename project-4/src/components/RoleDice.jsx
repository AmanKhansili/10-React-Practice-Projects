import React, { useState } from "react";

const RoleDice = ({ currentDice, handleClick, error }) => {
  return (
    <section className="h-5/6 flex flex-col items-center justify-center gap-5">
      <div className="text-center cursor-pointer" onClick={handleClick}>
        <h1 className="text-red-500">{error}</h1>
        <img src={`/images/dice_${currentDice}.png`} alt="dice-1" />
        <p className="font-medium text-2xl">click on Dice to roll</p>
      </div>
      <div className="btn flex flex-col gap-3">
        <button className="px-16 py-2 rounded-lg border-2 cursor-pointer">Reset Score</button>
        <button className="bg-black text-white px-16 py-2 rounded-lg border-2 cursor-pointer">
          Show Rule
        </button>
      </div>
    </section>
  );
};

export default RoleDice;
