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
            className={`border border-black w-14 h-14 font-bold grid place-items-center cursor-pointer 
            ${value === selectedValue ? "bg-black text-white" : ""}`}
            onClick={() => setSelectedValue(value)}
          >
            {value}
          </h2>
        ))}
      </div>
      <h1 className="font-bold float-end mt-4">Select Number is : {selectedValue}</h1>
    </div>
  );
};

export default NumberSelector;
