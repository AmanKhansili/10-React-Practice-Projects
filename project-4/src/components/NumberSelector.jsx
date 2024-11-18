import React, { useState } from "react";

const NumberSelector = ({ selectedValue, setSelectedValue }) => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="selector">
      <div className="flex gap-5">
        {arr.map((value, index) => (
          <h2
            isSelected={value === selectedValue}
            key={index}
            className={`grid h-14 w-14 cursor-pointer place-items-center border border-black font-bold ${value === selectedValue ? "bg-black text-white" : ""}`}
            onClick={() => setSelectedValue(value)}
          >
            {value}
          </h2>
        ))}
      </div>
      <h1 className="float-end mt-4 font-bold">
        Select Number is : {selectedValue}
      </h1>
    </div>
  );
};

export default NumberSelector;
