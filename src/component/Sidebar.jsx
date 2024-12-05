import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Handshake,
  Bell,
  Files,
  Album,
  UserRoundPen,
  LogOut,
  Menu,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import '../style/Sidebar.css'
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
      {/* Sidebar */}
      <aside
        className={`sidebar ${isSidebarOpen ? "" : "hidden"}`}
      >
        {/* Sidebar Logo */}
        <div className="sidebar-logo">
          <img src="/logo.png" alt="Logo" />
        </div>

        {/* Sidebar Header */}
        <div className="sidebar-header">
          <h1>My Sidebar</h1>
        </div>

        {/* Navigation Links */}
        <div className="sidebar-links">
          <NavLink to="/patient/dashboard" className="sidebar-link">
            <LayoutDashboard /> Dashboard
          </NavLink>

          <div>
            <button className="sidebar-link" onClick={toggleFriendDropdown}>
              <Handshake /> Friend
              {isFriendDropdownOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isFriendDropdownOpen && (
              <div className="sidebar-dropdown">
                <NavLink to="/friend-list" className="sidebar-dropdown-link">
                  Friend List
                </NavLink>
                <NavLink to="/friend-request" className="sidebar-dropdown-link">
                  Friend Request
                </NavLink>
                <NavLink to="/discover" className="sidebar-dropdown-link">
                  Discover
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/doctors" className="sidebar-link">
            <Files /> Document
          </NavLink>
          <NavLink to="/albums" className="sidebar-link">
            <Album /> Albums
          </NavLink>
          <NavLink to="/profile" className="sidebar-link">
            <UserRoundPen /> Profile
          </NavLink>
        </div>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          <CgProfile size={40} className="mx-auto mb-2" />
          <p className="font-medium">MR. Bashir Jibrin</p>
          <p className="text-sm text-gray-500">User</p>
        </div>
      </aside>

      {/* Main Content */}
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

        <div className="p-6">Main content goes here.</div>
      </main>
    </div>
  );
}

export default Sidebar;
