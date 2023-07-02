import SideBar from "./Components/SideBar/SideBar";
import "./styles.css";
import Header from "./Components/Header/Header";
import FirstGroup from "./Components/FirstGroup/FirstGroup";
import SecondGroup from "./Components/SecondGroup/SecondGroup";
import ThirdGroup from "./Components/ThirdGroup/ThirdGroup";

export default function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="contentContainer">
        <Header />
        <FirstGroup />
        <SecondGroup />
        <ThirdGroup />
      </div>
    </div>
  );
}
