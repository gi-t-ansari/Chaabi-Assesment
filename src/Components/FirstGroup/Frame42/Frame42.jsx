import React from "react";
import trendUp from "../../../Assets/trend-up.jpg";
import vector from "../../../Assets/Vector.png";
import "./Frame42.css";

const Frame42 = () => {
  return (
    <div className="frame42Container">
      <span>In Training Workers</span>
      <div className="frame41container">
        <div className="frame40Container">
          <span className="font33">3,354</span>
          <div className="frame39Container">
            <div className="trendUpContainer">
              <img src={trendUp} alt="trend-up" />
              <span>20%</span>
            </div>
            <span>234</span>
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

export default Frame42;
