import React from "react";
import upArrow from "../../../Assets/Arrow - Up.png";
import "./Group289227.css";

const Group289227 = () => {
  return (
    <div className="group289227Container">
      <span className="group289227Heading">Monthly Training Activity</span>
      <div className="frame1270">
        <img src={upArrow} alt="upAroor" />
        <span className="group289227SubHeading">width: 196px height: 18px</span>
      </div>
      <div className="frame1271">
        <div className="circleLineContainer">
          <div className="blueCircle"></div>
          <div className="grayLine"></div>
          <div className="blueCircle"></div>
          <div className="grayLine"></div>
          <div className="blueCircle"></div>
          <div className="grayLine"></div>
          <div className="blueCircle"></div>
        </div>
        <div className="courseContainer">
          <div className="courseChildContainer">
            <span className="course">course a</span>
            <span className="courseSummary">
              23 Workers Took This Course This Week
            </span>
          </div>
          <div className="courseChildContainer">
            <span className="course">course b</span>
            <span className="courseSummary">
              253 Workers Took This Course This Week
            </span>
          </div>
          <div className="courseChildContainer">
            <span className="course">course c</span>
            <span className="courseSummary">
              253 Workers Took This Course This Week
            </span>
          </div>
          <div className="courseChildContainer">
            <span className="course">course d</span>
            <span className="courseSummary">
              253 Workers Took This Course This Week
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group289227;
