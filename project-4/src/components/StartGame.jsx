import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const StartGame = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full items-center justify-center gap-5">
      <div className="img">
        <img src="/images/dices.png" alt="dice" />
      </div>
      <div className="text">
        <h1 className="text-8xl font-bold">DICE GAME</h1>

        <motion.button
          className="float-end mt-5 rounded-md border-2 bg-black px-16 py-2 font-bold text-white"
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
