import React from "react";
import trendUp from "../../../Assets/trend-up.jpg";
import vector from "../../../Assets/Vector.png";
import "./Frame35293.css";

const Frame35293 = () => {
  return (
    <div className="frame42Container">
      <span>% Workers Passing Quiz</span>
      <div className="frame41container">
        <div className="frame40Container">
          <span className="font33">95%</span>
          <div className="frame39Container">
            <div className="trendUpContainer">
              <img src={trendUp} alt="trend-up" />
              <span>20%</span>
            </div>
            <span>24%</span>
          </div>
        </div>
        <div className="vectorContainer">
          <img src={vector} alt="vector" />
          <div className="daysContainer">
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
            <span>S</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame35293;
