import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa'; 
import '../style/Navbar.css';

const Navbar = () => {
  const [isOnline, setIsOnline] = useState(true); 

  const toggleOnlineStatus = () => {
    setIsOnline(!isOnline); 
  };

  return (
    <div className="navbar p-4">
      {/* First Column: Logo and Name */}
      <div className="navbar-section navbar-left">
        <h2 className="navbar-title">My Application</h2>
      </div>

      {/* Second Column: Center Section */}
      <div className="navbar-section navbar-center">
        {/* Empty for now, can add content later */}
      </div>

      {/* Third Column: Toggle Switch, Dropdown, and Icon */}
      <div className="navbar-section navbar-right">
        <div className="switch-container">
          <label className="switch">
            <input 
              type="checkbox" 
              checked={isOnline} 
              onChange={toggleOnlineStatus} 
            />
            <span className="slider"></span>
          </label>
         
        </div>
        <select className="language-dropdown">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          {/* Add more options as needed */}
        </select>
        <FaGlobe className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
  