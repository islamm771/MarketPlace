import { useState } from "react";
import "../QuickPost.css";
import { MdClose } from "react-icons/md";

const QuickPostSetBg = ({
  setActivePostBg,
  activePostBg,
  setPostOptionType,
}) => {
  return (
    <div className="bg-colors-container">
      <div className="bg-colors-content">
        {new Array(12).fill(0).map((_, i) => (
          <button
            className={`bg-color-btn bg-gradient-option-${i + 1} 
          ${activePostBg === i + 1 ? "active" : ""}`}
            onClick={() => setActivePostBg(i + 1)}
            key={i}
          ></button>
        ))}
      </div>
 
      <button
        className="bg-colors-close-btn"
        onClick={() => setPostOptionType("normal")}
      >
        <MdClose />
      </button>
    </div>
  );
};

export default QuickPostSetBg;
