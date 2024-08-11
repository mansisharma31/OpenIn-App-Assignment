import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import "./Sidebar.css";
import logo from "../../Assets/Images/logo1.png";
import Theme from '../../components/ThemeToggle';
import dashboard from "../../Assets/Images/Dashboard.png";
import upload from "../../Assets/Images/upload.png";
import invoice from "../../Assets/Images/invoice.png";
import schedule from "../../Assets/Images/Schedule.png";
import calendar from "../../Assets/Images/Calendar.png";
import notif from "../../Assets/Images/Notification.png";
import setting from "../../Assets/Images/Setting.png";
import collapse from "../../Assets/Images/collapse.png";
import expand from "../../Assets/Images/expand.png";
import bell from "../../Assets/Images/Bell.png";
import profile from "../../Assets/Images/Profile.png";
import file from "../../Assets/Images/File.png";
import Uploadicon from "../../Assets/Images/uploadIcon.png"
import Tags from "../../components/Tags";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(250); // initial width of the sidebar

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleResize = (e) => {
    setSidebarWidth(e.clientX);
  };
//   const navigate = useNavigate(); // Hook to navigate programmatically
  
//     const handleUploadClick = () => {
//       navigate('/remove'); // Redirect to /remove page
//     };

  return (
    <div className="flex bg-thirdBg">
     
      <div
        style={{ width: isCollapsed ? "100px" : `${sidebarWidth}px` }}
        className={`sidebar text-white h-screen transition-width duration-300 ease-in-out relative`}
      >

      <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <img
              src={logo} 
              alt="Logo"
              className="logo1"
            />
            {!isCollapsed && (
              <span className="logo-name">Base</span>)}
              {/* <span className="ml-2 text-xl font-semibold whitespace-nowrap">
                Base
              </span> */}
            
          </div>
          <button
            onClick={toggleCollapse}
            className="focus:outline-none"
          >
            <img
              src={isCollapsed ? collapse : expand}
              alt="Toggle Sidebar"
              className="w-6 h-6"
            />
          </button>
        </div>


        {/* <button
          onClick={toggleCollapse}
          className={`absolute top-2 right-2 p-1 text-gray-400 hover:text-white focus:outline-none`}
        >
          {isCollapsed ? (
            <img
              src={collapse}
              alt="Expand"
              className="w-6 h-6"
            />
          ) : (
            <img
              src={expand}
              alt="Collapse"
              className="w-6 h-6"
            />
          )}
        </button>


        <div className="flex items-center p-4 ml-3 mt-4">
          <img src={logo} alt="Base Logo" className=".logo1" />
          {!isCollapsed && <span className="logo-name">Base</span>}
          {/* <p className={`isCollapsed ? hidden : h-12`}>Base</p> 
        </div> */}


        <div className="flex flex-col items-start p-4">
          {/* <h1 className="text-lg font-bold mb-4">Sidebar</h1> */}
          <div className="flex flex-col items-start p-4 mt-4 space-y-2">
            <ul className="w-full">
              <li className="flex items-center space-x-2 mb-9">
                <img src={dashboard} alt="Dashboard Icon" className="w-6 h-6" />
                {!isCollapsed && <span>Dashboard</span>}
              </li>
              <div id="upload">
              <li className="flex items-center space-x-2 mb-9">
                <img src={upload} alt="Upload Icon" className="w-6 h-6" />
                {!isCollapsed && <span>Upload</span>}
              </li>
              </div>
              <li className="flex items-center space-x-2 mb-9">
                <img src={invoice} alt="Invoice Icon" className="w-6 h-6" />
                {!isCollapsed && <span>Invoice</span>}
              </li>
              <li className="flex items-center space-x-2 mb-9">
                <img src={schedule} alt="Calendar Icon" className="w-6 h-6" />
                {!isCollapsed && <span>Schedule</span>}
              </li>
              <li className="flex items-center space-x-2 mb-9">
                <img src={calendar} alt="Calendar Icon" className="w-6 h-6" />
                {!isCollapsed && <span>Calendar</span>}
              </li>
              <li className="flex items-center space-x-2 mb-9">
                <img src={notif} alt="Notification Icon" className="w-6 h-6" />
                {!isCollapsed && <span>Notification</span>}
              </li>
              <li className="flex items-center space-x-2 mb-9">
                <img src={setting} alt="Settings Icon" className="w-6 h-6" />
                {!isCollapsed && <span>Settings</span>}
              </li>
              
            </ul>
          </div>
        </div>
        <div
          className="absolute top-0 right-0 h-full w-2 cursor-col-resize bg-transparent"
          onMouseDown={(e) => {
            e.preventDefault();
            document.addEventListener("mousemove", handleResize);
            document.addEventListener("mouseup", () => {
              document.removeEventListener("mousemove", handleResize);
            });
          }}
        />
      </div>
      <div className="flex-grow p-4 bg-thirdBg">
      {/* Top Right Notification and Profile */}
      <div className="flex justify-between items-center">
        <h1 className="main-heading">Upload CSV</h1>
        <div className="flex items-center space-x-4">
          <img
            src={bell}
            alt="Notifications"
            className="w-5 h-6"
          />
          <img
            src={profile}
            alt="Profile"
            className="w-7 h-7 rounded-full"
          />
        </div>
        <Theme />
        {/* <div className="light-dark">
            <div>
              <input type="checkbox" class="checkbox" id="checkbox"/>
              <label for="checkbox" class="checkbox-label">
              <img className="sun" src={sun} alt="sun Logo" />
              <img className="moon" src={moon} alt="moon Logo" />
                <span class="ball"></span>
              </label>
            </div>
          </div> */}
      </div>

      {/* Main content goes here */}
      {/* Box with Inner Box */}
      <div className="flex-grow p-4 bg-thirdBg flex justify-center items-center">
      <div className="mt-40 p-4 shadow-md rounded-md" style={{ width: '596px', height: '367px' , backgroundColor: 'var(--excel-color)' }}>
        {/* Inner Box */}
        <div className="flex flex-col items-center justify-center p-8 border-dashed border-2 border-gray-300 rounded-md" style={{ height: '250px' , backgroundColor: 'var(--excel-color)' }}>
          <img
            src={file}
            alt="Excel"
            className="w-12 h-12 mb-4"
          />
          <p id="uploaded" style={{color: '#999CA0'}}>upload-template.xlsx</p>
          <p id="remove" style={{color: '#D33030'}}>Remove</p>
        </div>
        {/* Upload Button */}
        <div className="flex justify-center mt-4">
        <button
            className="w-full flex items-center justify-center px-4 py-4 text-white rounded-lg hover:bg-blue-700 focus:outline-none" style={{backgroundColor: '#605BFF', opacity: '40%'}}
          >
            <img src={Uploadicon} alt="" className="w-5 h-5 mr-2"/>
            <span id="upload">Upload</span>
          </button>
        </div>
      </div>
    </div> 
    <Tags />
    </div>
    </div>



    
  );
}
