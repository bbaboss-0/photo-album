import React, { useState, useEffect } from "react";
import { LayoutDashboard, Handshake, Bell, Files, Album, Trash2, Video, Image, UserRoundIcon as UserRoundPen, LogOut, Menu, ChevronDown, ChevronUp } from 'lucide-react'; 
import logo from "../assets/icon/apple.png";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./Sidebar.css";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isFriendDropdownOpen, setIsFriendDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleFriendDropdown = () => {
    setIsFriendDropdownOpen(!isFriendDropdownOpen);
  };

  const navigate = useNavigate();

  return (
    <div className="sidebar-container">
      <aside className={`sidebar ${isSidebarOpen ? "" : "hidden"}`}>
        <div className="sidebar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="sidebar-header">
          <h1>Photo-Album</h1>
        </div>
        <div className="sidebar-links">
          <NavLink to="dashboard" className="sidebar-link">
            <LayoutDashboard /> Dashboard
          </NavLink>
          <div>
            <button className="sidebar-link" onClick={toggleFriendDropdown}>
              <Handshake /> Friend
              {isFriendDropdownOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isFriendDropdownOpen && (
              <div className="sidebar-dropdown">
                <NavLink to="Friend-List" className="sidebar-dropdown-link">
                  Friend List
                </NavLink>
                <NavLink to="Friend-Request" className="sidebar-dropdown-link">
                  Friend Request
                </NavLink>
                <NavLink to="Discover" className="sidebar-dropdown-link">
                  Discover
                </NavLink>
              </div>
            )}
          </div>
          <NavLink to="Document" className="sidebar-link">
            <Files /> Document
          </NavLink>
          <NavLink to="Album" className="sidebar-link">
            <Album /> Albums
          </NavLink>
          <NavLink to="Photos" className="sidebar-link">
            <Image /> Photos
          </NavLink>
          <NavLink to="Videos" className="sidebar-link">
            <Video /> Videos
          </NavLink>
          <NavLink to="Trash" className="sidebar-link">
            <Trash2 /> Trash
          </NavLink>
          <NavLink to="Profile" className="sidebar-link">
            <UserRoundPen /> Profile
          </NavLink>
        </div>
        <div className="sidebar-footer">
          <CgProfile size={40} className="profile-icon" />
          <p className="user-name">MR. Bashir Jibrin</p>
          <p className="user-role">User</p>
        </div>
      </aside>
      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <nav className="navbar">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <Menu />
          </button>
          <div className="navbar-icons">
            <button>
              <Bell />
            </button>
            <button onClick={() => navigate("/")}>
              <LogOut />
            </button>
          </div>
        </nav>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Sidebar;

