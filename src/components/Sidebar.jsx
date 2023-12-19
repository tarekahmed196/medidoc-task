import React, { useState } from "react";
import './Sidebar.css'
import {
} from "@heroicons/react/solid";
import MenuCloseIcon from "../assets/menuCloseIcon.svg";
import HambergurMenu from "../assets/hamburger.svg";
import HomeIcon from "../assets/Icon_home.svg";
import Profile from "../assets/profile.svg";
import Appointments from "../assets/appointments.svg";
import History from "../assets/history.svg";
import Settings from "../assets/settings.svg";
import Add from "../assets/add.svg";
import Plus from "../assets/plus.svg";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`h-[1051px] flex overflow-hidden`}
    >
      {/* Sidebar Content */}
      <div  className={`flex flex-col items-center bg-[#FFFFFF]  ${isOpen ? 'w-80 relative ' : ""} `}>
        {/* Hamburger Menu and Icons (Vertical) */}
        <div className="flex flex-col h-full items-center justify-between w-[96px]">
        
        {/* hamburger menu */}
          
            <button 
              className={`${isOpen ? "hidden" : ""}`}
              onClick={toggleSidebar}
            >
              <img src={HambergurMenu} className='text-base text-white'  />
            </button>
          <div className={`${isOpen ? "" : 'hidden'} flex gap-6 items-center`}>
                <img src={Plus} alt="" />
                
                  <div className="text-2xl"><span className="text-black ">Medi</span><span className="text-pink">Doc</span></div>

              </div>
              <button style={{ transform: 'translate(50%)', overflow: 'visible',zIndex: 1}}
              className="absolute top-0 right-0 flex items-center justify-start  mb-4 "
              onClick={toggleSidebar}
            >
              <img  src={MenuCloseIcon} className={` text-white ${isOpen ? "" : "hidden"}`} />
            </button>

          {/* Middle Icons */}
          <div className=" h-96 space-y-7">
            <div className={`flex items-start gap-5 w-full mb-2`}>
              <img src={HomeIcon} alt="" />
              <span className={`text-base text-pink ${isOpen ? "mr-3" : "hidden"}`}>
                Home
              </span>
            </div>
            <div className={`flex  items-start gap-5 w-full mb-2`}>
              <img src={Profile} alt="" />
              <span className={`text-base text-black ${isOpen ? "mr-3" : "hidden"}`}>
                Patient Profile
              </span>
            </div>
            <div className={`flex items-start gap-5 w-full mb-2`}>
              <img src={Appointments} alt="" />
              <span className={`text-base text-black ${isOpen ? "mr-3" : "hidden"}`}>
                Appointments
              </span>
            </div>
            <div className={`flex items-start gap-5 w-full mb-2`}>
              <img src={History} alt="" />
              <span className={`text-base text-black ${isOpen ? "mr-3" : "hidden"}`}>
              Medical History
              </span>
            </div>
            <div className={`flex items-start gap-5 w-full mb-2`}>
              <img src={Settings} alt="" />
              <span className={`text-base text-black ${isOpen ? "mr-3" : "hidden"}`}>
                Settings
              </span>
            </div>
          </div>

          {/* Last icon */}
          <div className="flex h-96">
            <img src={Add} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
