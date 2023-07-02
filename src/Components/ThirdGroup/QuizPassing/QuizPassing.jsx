import React from "react";
import doughnut from "../../../Assets/Doughnut.png";
import "./QuizPassing.css";

const QuizPassing = () => {
  return (
    <div className="quizPassingContainer">
      <span className="quizPassingHEading">Quiz Passing %</span>
      <div className="frame1263">
        <img src={doughnut} alt="doughnut" />
        <div>
          <div className="frame1262">
            <div className="dot lightGreenDot"></div>
            <div className="frame1253">
              <span className="result">passed</span>
              <span className="count">1423 Workers</span>
            </div>
          </div>
          <div className="frame1262">
            <div className="dot redDot"></div>
            <div className="frame1253">
              <span className="result">failed</span>
              <span className="count">134 Workers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPassing;
