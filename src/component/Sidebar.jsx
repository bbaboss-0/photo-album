"use client"

import { useState, useEffect } from "react"
import { NavLink, useNavigate, Outlet, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  Handshake,
  Bell,
  Files,
  Album,
  Trash2,
  Video,
  ImageIcon,
  UserRound,
  LogOut,
  Menu,
  ChevronDown,
  ChevronUp,
  Search,
  Upload,
  Plus,
  Settings,
  HardDrive,
  Moon,
  Sun,
  Heart,
  Share2,
  Clock,
  Star,
  Keyboard,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import Logo from "../assets/images/img5.png"
import { useApp } from "./AppContext"

function Sidebar() {
  const { user, stats, recentUploads, isDarkMode, isSidebarOpen, toggleDarkMode, toggleSidebar, addPhoto } = useApp()

  const [isFriendDropdownOpen, setIsFriendDropdownOpen] = useState(false)
  const [isRecentDropdownOpen, setIsRecentDropdownOpen] = useState(false)
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [newUpload, setNewUpload] = useState({
    name: "",
    type: "photo",
    url: "",
  })

  const navigate = useNavigate()
  const location = useLocation()

  // Responsive Sidebar Management
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        toggleSidebar(true)
      } else {
        toggleSidebar(false)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Check if a route is active
  const isRouteActive = (path) => {
    return location.pathname.includes(path)
  }

  // Quick actions
  const quickActions = [
    { name: "New Album", icon: Plus, shortcut: "⌘A" },
    { name: "Upload Photos", icon: Upload, shortcut: "⌘U" },
    { name: "Share Album", icon: Share2, shortcut: "⌘S" },
    { name: "Favorites", icon: Heart, shortcut: "⌘F" },
  ]

  // Keyboard shortcuts
  const keyboardShortcuts = [
    { key: "⌘K", action: "Search" },
    { key: "⌘/", action: "Keyboard Shortcuts" },
    { key: "⌘B", action: "Toggle Sidebar" },
    { key: "⌘D", action: "Toggle Dark Mode" },
  ]

  const handleUpload = () => {
    if (newUpload.name && newUpload.url) {
      if (newUpload.type === "photo") {
        addPhoto({
          name: newUpload.name,
          url: newUpload.url,
        })
      }
      // Add handlers for other types as needed

      setNewUpload({
        name: "",
        type: "photo",
        url: "",
      })
      setIsUploadDialogOpen(false)
    }
  }

  const SidebarContent = () => (
    <div className="flex h-full flex-col bg-primary text-white dark:bg-gray-900">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-white/20">
            <AvatarImage src={Logo} alt="Logo" />
            <AvatarFallback className="bg-primary-foreground text-primary">PA</AvatarFallback>
          </Avatar>
          <h1 className="text-xl font-bold">Photo-Album</h1>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10" onClick={toggleSidebar}>
          <ChevronUp className="h-5 w-5" />
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="px-4 pb-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full bg-white/20 text-white hover:bg-white/30">
              <Plus className="mr-2 h-4 w-4" /> Quick Actions
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-white  w-56">
            {/* <DropdownMenuLabel >Quick Actions</DropdownMenuLabel> */}
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {quickActions.map((action) => (
                <DropdownMenuItem key={action.name}>
                  <action.icon className="mr-2 h-4 w-4" />
                  <span>{action.name}</span>
                  <DropdownMenuShortcut>{action.shortcut}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-2">
        <div className="relative">
          <Search className="absolute right-3  top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
          <Input
            placeholder="Search..."
            className="bg-white/10 border-0 pl-9 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-white/30"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-white/30">
        <div className="space-y-1">
          <NavLink
            to="/app/dashboard"
            className={({ isActive }) =>
              `flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all no-underline ${
                isActive ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </NavLink>

          <Collapsible open={isFriendDropdownOpen} onOpenChange={setIsFriendDropdownOpen} className="rounded-lg">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className={`w-full justify-start rounded-lg px-3 py-2.5 text-sm font-medium ${
                  isRouteActive("friend")
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Handshake className="mr-3 h-5 w-5" />
                Friends
                {isFriendDropdownOpen ? (
                  <ChevronUp className="ml-auto h-5 w-5" />
                ) : (
                  <ChevronDown className="ml-auto h-5 w-5" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 px-2 py-1">
              <NavLink
                to="/app/friend-list"
                className={({ isActive }) =>
                  `flex items-center rounded-lg px-3 py-2 text-sm transition-all no-underline ${
                    isActive ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                Friend List
              </NavLink>
              <NavLink
                to="/app/friend-request"
                className={({ isActive }) =>
                  `flex items-center rounded-lg px-3 py-2 text-sm transition-all no-underline ${
                    isActive ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                Friend Request
              </NavLink>
              <NavLink
                to="/app/discover"
                className={({ isActive }) =>
                  `flex items-center rounded-lg px-3 py-2 text-sm transition-all no-underline ${
                    isActive ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                Discover
              </NavLink>
            </CollapsibleContent>
          </Collapsible>

          <NavLink
            to="/app/document"
            className={({ isActive }) =>
              `flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all no-underline ${
                isActive ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <Files className="mr-3 h-5 w-5" />
            Document
          </NavLink>

          <NavLink
            to="/app/album"
            className={({ isActive }) =>
              `flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all no-underline ${
                isActive ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <Album className="mr-3 h-5 w-5" />
            Albums
          </NavLink>

          <NavLink
            to="/app/photos"
            className={({ isActive }) =>
              `flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all no-underline ${
                isActive ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <ImageIcon className="mr-3 h-5 w-5" />
            Photos
          </NavLink>

          <NavLink
            to="/app/videos"
            className={({ isActive }) =>
              `flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all no-underline ${
                isActive ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <Video className="mr-3 h-5 w-5" />
            Videos
          </NavLink>

          <NavLink
            to="/app/trash"
            className={({ isActive }) =>
              `flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all no-underline ${
                isActive ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <Trash2 className="mr-3 h-5 w-5" />
            Trash
          </NavLink>

          <NavLink
            to="/app/profile"
            className={({ isActive }) =>
              `flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all no-underline ${
                isActive ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <UserRound className="mr-3 h-5 w-5" />
            Profile
          </NavLink>

          {/* Recent Uploads Section */}
          <div className="pt-4">
            <Collapsible open={isRecentDropdownOpen} onOpenChange={setIsRecentDropdownOpen} className="rounded-lg">
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
                >
                  <Clock className="mr-3 h-5 w-5" />
                  Recent Uploads
                  {isRecentDropdownOpen ? (
                    <ChevronUp className="ml-auto h-5 w-5" />
                  ) : (
                    <ChevronDown className="ml-auto h-5 w-5" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 px-2 py-1">
                {recentUploads.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="w-full justify-start rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                  >
                    <div className="mr-3 h-4 w-4">
                      {item.type === "Album" && <Album className="h-4 w-4" />}
                      {item.type === "Video" && <Video className="h-4 w-4" />}
                      {item.type === "Document" && <Files className="h-4 w-4" />}
                    </div>
                    <div className="flex flex-1 flex-col items-start text-left">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-white/50">{item.date}</span>
                    </div>
                  </Button>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </nav>

      {/* Storage Usage */}
      <div className="border-t border-white/10 p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <HardDrive className="mr-2 h-4 w-4 text-white/70" />
            <span className="text-sm font-medium">Storage</span>
          </div>
          <span className="text-xs text-white/70">{stats.storage}% used</span>
        </div>
        <Progress value={stats.storage} className="h-2 bg-white/10" indicatorClassName="bg-blue-400" />
        <p className="mt-1 text-xs text-white/50">{(stats.storage / 10).toFixed(1)} GB of 10 GB used</p>
      </div>

      {/* User Profile Section */}
      <div className="border-t border-white/10 p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9 border border-white/20">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm font-medium">{user.name}</p>
            <p className="truncate text-xs text-white/60">{user.email}</p>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={toggleDarkMode}>
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Toggle dark mode</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={() => navigate("/")}
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Logout</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 dark:text-white">
      {/* Desktop Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-20 flex h-full flex-shrink-0 flex-col border-r border-gray-200 bg-primary transition-all duration-300 ease-in-out dark:border-gray-800 md:relative ${
          isSidebarOpen ? "w-64" : "w-0 -translate-x-full md:w-20 md:translate-x-0"
        }`}
      >
        {isSidebarOpen ? (
          <SidebarContent />
        ) : (
          <div className="flex h-full flex-col items-center py-6">
            <Avatar className="h-10 w-10 border-2 border-white/20">
              <AvatarImage src={Logo} alt="Logo" />
              <AvatarFallback className="bg-primary-foreground text-primary">PA</AvatarFallback>
            </Avatar>
            <nav className="mt-6 flex flex-col items-center space-y-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" asChild>
                      <NavLink to="/app/dashboard">
                        <LayoutDashboard className="h-5 w-5" />
                      </NavLink>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Dashboard</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/10"
                      onClick={() => setIsFriendDropdownOpen(!isFriendDropdownOpen)}
                    >
                      <Handshake className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Friends</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" asChild>
                      <NavLink to="/app/document">
                        <Files className="h-5 w-5" />
                      </NavLink>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Documents</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" asChild>
                      <NavLink to="/app/album">
                        <Album className="h-5 w-5" />
                      </NavLink>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Albums</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" asChild>
                      <NavLink to="/app/photos">
                        <ImageIcon className="h-5 w-5" />
                      </NavLink>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Photos</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" asChild>
                      <NavLink to="/app/videos">
                        <Video className="h-5 w-5" />
                      </NavLink>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Videos</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" asChild>
                      <NavLink to="/app/trash">
                        <Trash2 className="h-5 w-5" />
                      </NavLink>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Trash</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" asChild>
                      <NavLink to="/app/profile">
                        <UserRound className="h-5 w-5" />
                      </NavLink>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Profile</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </nav>
            <div className="mt-auto mb-6 flex flex-col items-center gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/10"
                      onClick={toggleDarkMode}
                    >
                      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Toggle dark mode</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/10"
                      onClick={() => navigate("/")}
                    >
                      <LogOut className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Logout</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        )}
      </aside>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="fixed left-4 top-3 z-10 md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-80">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b border-gray-200 bg-white px-4 shadow-sm dark:border-gray-800 dark:bg-gray-800 sm:px-6">
          <div className="hidden md:block">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Keyboard Shortcuts Button */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto hidden md:flex">
                  <Keyboard className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" align="end" className="w-64">
                <div className="space-y-2 p-2">
                  <h3 className="font-medium">Keyboard Shortcuts</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {keyboardShortcuts.map((shortcut) => (
                      <div key={shortcut.key} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{shortcut.action}</span>
                        <kbd className="rounded border bg-muted px-2 py-0.5 text-xs font-medium">{shortcut.key}</kbd>
                      </div>
                    ))}
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex items-center gap-4">
            {/* Upload Button */}
            <Button size="sm" className="hidden md:flex" onClick={() => setIsUploadDialogOpen(true)}>
              <Upload className="mr-2 h-4 w-4" /> Upload
            </Button>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-80 overflow-y-auto">
                  {[1, 2, 3].map((item) => (
                    <DropdownMenuItem key={item} className="flex items-start gap-4 p-3">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback>UN</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New friend request</p>
                        <p className="text-xs text-muted-foreground">User {item} sent you a friend request</p>
                        <p className="mt-1 text-xs text-muted-foreground">2 min ago</p>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="justify-center text-sm font-medium">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/app/profile")}>
                  <UserRound className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Star className="mr-2 h-4 w-4" />
                  Favorites
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/")}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 dark:bg-gray-900 md:p-6">
          <Outlet />
        </main>
      </div>

      {/* Upload Dialog */}
      <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Upload Content</DialogTitle>
            <DialogDescription>Add new content to your photo album</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="upload-name">Name</Label>
              <Input
                id="upload-name"
                value={newUpload.name}
                onChange={(e) => setNewUpload({ ...newUpload, name: e.target.value })}
                placeholder="Enter a name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="upload-type">Type</Label>
              <select
                id="upload-type"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={newUpload.type}
                onChange={(e) => setNewUpload({ ...newUpload, type: e.target.value })}
              >
                <option value="photo">Photo</option>
                <option value="video">Video</option>
                <option value="document">Document</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="upload-url">URL</Label>
              <Input
                id="upload-url"
                value={newUpload.url}
                onChange={(e) => setNewUpload({ ...newUpload, url: e.target.value })}
                placeholder="Enter content URL"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsUploadDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpload}>Upload</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Sidebar

