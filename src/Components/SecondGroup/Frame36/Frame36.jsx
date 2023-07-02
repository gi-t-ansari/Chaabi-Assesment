import React from "react";
import frame37 from "../../../Assets/Frame 37.png";
import "./Frame36.css";

const Frame36 = () => {
  return (
    <div className="frame36">
      <span>Chapter Wise Status</span>
      <div className="frame37">
        <img src={frame37} alt="frame37" />
      </div>
      <div className="frame35">
        <div className="frame33">
          <div className="dotContainer">
            <div className="blueDot dot"></div>
            <span>Finished Training</span>
          </div>
          <div className="dotContainer">
            <div className="violetDot dot"></div>
            <span>ChapterB</span>
          </div>
          <div className="dotContainer">
            <div className="redDot dot"></div>
            <span>Haven't Started Yet</span>
          </div>
        </div>
        <div className="frame34">
          <div className="dotContainer">
            <div className="lightGrayDot dot"></div>
            <span>Chapter A</span>
          </div>
          <div className="dotContainer">
            <div className="greenDot dot"></div>
            <span>Chapter C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame36;
