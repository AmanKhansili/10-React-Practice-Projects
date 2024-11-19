import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <>
          {isOpen && (
            <div className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur">
              <div className="relative z-50 m-auto min-h-[200px] min-w-[80%] bg-white p-4">
                <div className="flex justify-end">
                  <AiFillCloseCircle
                    onClick={onClose}
                    className="self-end text-2xl"
                  />
                </div>
                {children}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Modal;
