import React from "react";
import logo from "../../Assets/ChabiLogo.png";
import fill from "../../Assets/Fill 1.png";
import game from "../../Assets/Game.png";
import location from "../../Assets/Location.png";
import combined from "../../Assets/Combined.png";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sideBarContainer">
      <div className="logoContainer">
        <img src={logo} alt="logo" />
      </div>
      <div className="menuContainer">
        <div className="whiteText menuContent">
          <img src={combined} alt="combined" />
          <p>Dashboard</p>
        </div>
        <div className="blueText menuContent">
          <img src={game} alt="game" />
          <p>Training</p>
        </div>
        <div className="blueText menuContent">
          <div>
            <img src={fill} alt="fill" />
          </div>
          <p>Users</p>
        </div>
        <div className=" blueText menuContent">
          <img src={location} alt="location" />
          <p>Analytics</p>
        </div>
        <div className="blueText menuContent">
          <img src={location} alt="location" />
          <p>My Account</p>
        </div>
        <div className="blueText menuContent">
          <img src={location} alt="location" />
          <p>Support</p>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
