import React from "react";

const Rules = () => {
  return (
    <div className="bg-pink-100 px-6 py-5">
      <h2 className="text-3xl font-bold">How to play dice game</h2>
      <br />
      <div className="text">
        <ol className="list-decimal pl-5">
          <li>Select any number.</li>
          <li>Click on the dice image.</li>
          <li>
            After clicking on the dice, if your selected number is equal to the
            dice number, you will get the same points as the dice.
          </li>
          <li>If your guess is incorrect, 2 points will be deducted.</li>
        </ol>
      </div>
    </div>
  );
};

export default Rules;
