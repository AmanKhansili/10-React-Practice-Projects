import React, { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import img from "./../../public/image/contact.svg";
const ContectForm = () => {
  const [name, setName] = useState("Anshu");
  const [email, setEmail] = useState("support@dosomecoding.com");
  const [text, setText] = useState("Subscribe to this channel");

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <div className="container flex gap-20">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="btn w-full flex justify-around gap-7 text-white">
          <button className="px-5 py-2">
            <FaMessage /> VIA SUPPORT CHAT
          </button>
          <button className="px-5 py-2">
            <IoCall />
            VIA CALL
          </button>
        </div>
        <div className="btn1">
          <button className="w-[33rem] py-2 mt-5 bg-white">
            <MdEmail />
            VIA EMAIL FORM
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center mt-5 px-[80px]"
        >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter your name" />
          <label htmlFor="name">Email</label>
          <input type="email" name="name" placeholder="xyz@gmail.com" />
          <label htmlFor="name">Message</label>
          <textarea name="text" rows="5" className="w-full border-solid border-2 border-black" />

          <button className="text-white px-5 py-2 flex self-end mt-[10px]">SUBMIT</button>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className="image">
        <img src={img} alt="" width="84%" />
      </div>
    </div>
  );
};

export default ContectForm;
