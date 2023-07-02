import React from "react";
import trendUpRed from "../../../Assets/trend-up-red.png";
import vectorRed from "../../../Assets/Vector-red.png";
import "./Frame35292.css";

const Frame35292 = () => {
  return (
    <div className="frame42ContainerRed">
      <span>Video Watch-Time (Hrs)</span>
      <div className="frame41containerRed">
        <div className="frame40ContainerRed">
          <span className="font33">2,433</span>
          <div className="frame39Container">
            <div className="trendUpContainerRed">
              <img src={trendUpRed} alt="trend-up-red" />
              <span>20%</span>
            </div>
            <span>435</span>
          </div>
        </div>
        <div className="vectorContainer">
          <img src={vectorRed} alt="vector" />
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

export default Frame35292;
