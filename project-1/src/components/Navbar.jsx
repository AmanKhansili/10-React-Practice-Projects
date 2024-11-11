import React from "react";
import logo from "../../public/images/brand_logo.png";
const Navbar = () => {
  return (
    <div className="container flex justify-between items-center pt-4">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <ul className="flex gap-10">
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>

      <div className="button">
        <button className="bg-red-600 text-white px-5 py-1">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
