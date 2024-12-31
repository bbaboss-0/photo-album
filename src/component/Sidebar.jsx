import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Handshake,
  Bell,
  Files,
  Album,
  Trash2,
  Video,
  Image,
  UserRound as UserRoundPen,
  LogOut,
  Menu,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Logo from "../assets/images/img5.png";
import "../style/Sidebar.css";
import "../style/global.css";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isFriendDropdownOpen, setIsFriendDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Responsive Sidebar Management
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-primary  text-white">
      <div className="p-4 flex flex-col items-center justify-center">
        <img src={Logo} alt="Logo" className="w-16 h-16 rounded-full mb-2" />
        <h1 className="text-xl font-bold">Photo-Album</h1>
      </div>
      <nav className="flex-1  overflow-y-auto px-3 py-4">
        <NavLink to="dashboard" className="sidebar-link">
          <LayoutDashboard className="w-5 h-5 mr-2" /> Dashboard
        </NavLink>
        <Collapsible
          open={isFriendDropdownOpen}
          onOpenChange={setIsFriendDropdownOpen}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-gray-800"
            >
              <Handshake className="w-5 h-5 mr-2" /> Friends
              {isFriendDropdownOpen ? (
                <ChevronUp className="ml-auto" />
              ) : (
                <ChevronDown className="ml-auto" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-7 space-y-1">
            <NavLink to="Friend-List" className="sidebar-link">
              Friend List
            </NavLink>
            <NavLink to="Friend-Request" className="sidebar-link">
              Friend Request
            </NavLink>
            <NavLink to="Discover" className="sidebar-link">
              Discover
            </NavLink>
          </CollapsibleContent>
        </Collapsible>
        <NavLink to="Document" className="sidebar-link">
          <Files className="w-5 h-5 mr-2" /> Document
        </NavLink>
        <NavLink to="Album" className="sidebar-link">
          <Album className="w-5 h-5 mr-2" /> Albums
        </NavLink>
        <NavLink to="Photos" className="sidebar-link">
          <Image className="w-5 h-5 mr-2" /> Photos
        </NavLink>
        <NavLink to="Videos" className="sidebar-link">
          <Video className="w-5 h-5 mr-2" /> Videos
        </NavLink>
        <NavLink to="Trash" className="sidebar-link">
          <Trash2 className="w-5 h-5 mr-2" /> Trash
        </NavLink>
        <NavLink to="Profile" className="sidebar-link">
          <UserRoundPen className="w-5 h-5 mr-2" /> Profile
        </NavLink>
      </nav>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <aside
        className={`bg-gray-900 text-white fixed h-full md:relative transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-64 translate-x-0" : "w-0 md:w-16 -translate-x-full"
        }`}
      >
        {isSidebarOpen && <SidebarContent />}
      </aside>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-primary text-white shadow-sm">
          <div className="max-w-8xl mx-auto py-2 px-2 sm:px-6 lg:px-8 flex items-center"> 
            {/* hgjkll; */}
            {/* Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:block hidden"
              onClick={toggleSidebar}
            >
              <Menu />
            </Button>

            {/* Right Side */}
            <div className="ml-auto flex items-center space-x-5">
              <Button variant="ghost" size="icon">
                <Bell />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
                <LogOut />
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Sidebar;
