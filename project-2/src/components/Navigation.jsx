import React from "react";

const Navigation = () => {
  return (
    <div className="flex justify-between">
      <div className="logo">
        <h1>🥋</h1>
      </div>
      <ul className="flex items-center gap-5">
        <li>Home</li>
        <li>About</li>
        <li>Contect</li>
      </ul>
    </div>
  );
};

export default Navigation;
