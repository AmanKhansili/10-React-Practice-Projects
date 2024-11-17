import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const StartGame = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex justify-center items-center gap-5">
      <div className="img">
        <img src="/images/dices.png" alt="dice" />
      </div>
      <div className="text">
        <h1 className="font-bold text-8xl">DICE GAME</h1>
        
        <motion.button
          className="bg-black text-white font-bold px-16 py-2 mt-5 float-end border-2 rounded-md"
          onClick={() => navigate("/game")}
          whileHover={{
            scale: 1.1,
            rotate: 10,
            transition: { type: "spring", stiffness: 300 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          Play Now
        </motion.button>
      </div>
    </div>
  );
};

export default StartGame;
