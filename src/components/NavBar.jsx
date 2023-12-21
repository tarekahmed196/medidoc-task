import Avator from "../assets/Avatar.svg";
import Vector from "../assets/Vector.svg";
import DayNightToggle from "react-day-and-night-toggle";
import { useState } from "react";

const NavBar = ({ onDataFromChild,dataFromChild,isDesktop, isTablet, isMobile }) => {
  const [isLightMode, setIsLightMode] = useState(true);

  const sendDataToParent = () => {
    onDataFromChild(isLightMode);
  };

  return (
    <div className={`navbar justify-between bg-transparent ${isMobile ? '-mb-16 ' : ''} ${dataFromChild? 'bg-white': 'bg-black'} `}>
  <div className={`${isDesktop? 'flex-1': ""} ${isTablet? 'flex-1': ""} ${isMobile? 'flex-3 ': ""}`}>
    <span className={`${isDesktop ? 'text-black text-xl' : ''}${isTablet ? 'text-black text-xl' : ''} ${isMobile ? 'text-white text-xl' : ''}`}>Home</span>
  </div>
  <div className="flex-none ">
    <DayNightToggle
      onChange={() => setIsLightMode(!isLightMode)}
      onClick={sendDataToParent}
      checked={isLightMode} 
    />
    <div className="flex items-center">
      <div className="w-10 rounded-full">
        <img alt="Avatar" src={Avator} />
      </div>
      <img src={Vector} alt="Vector" />
    </div>
  </div>
</div>

  );
};

export default NavBar;
