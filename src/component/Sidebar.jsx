import React, { useState } from "react";
import {
  FaUserCircle,
  FaTachometerAlt,
  FaFileAlt,
  FaInfoCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa"; // Import icons
import '../style/Sidebar.css'
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // State for sidebar toggle
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed); // Toggle sidebar
  };

  const sidebarItems = [
    { title: "Dashboard", icon: <FaTachometerAlt />, url: "dashboard" },
    { title: "Link 1", icon: <FaFileAlt />, url: "#Link1" },
    { title: "Link 2", icon: <FaInfoCircle />, url: "#Link2" },
    { title: "Link 3", icon: <FaInfoCircle />, url: "#Link3" },
  ];

  return (
    <div>
      {/* Toggle button */}
      <button className="menu-button" onClick={toggleSidebar}>
        {isCollapsed ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <FaUserCircle className="user-icon" />
          {!isCollapsed && <h2 className="user-name">Photo Album</h2>}
        </div>
        <nav>
          <ul className="sidebar-menu">
            {sidebarItems.map((item, index) => (
              <li key={index} className="sidebar-item">
                <a
                  href={item.url}
                  className="sidebar-link"
                  onClick={() => navigate(item.url)}
                >
                  {item.icon}
                  {!isCollapsed && <span className="sidebar-text">{item.title}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
