"use client"

import { createContext, useContext, useState, useEffect } from "react"

// Create the context
const AppContext = createContext()

// Mock data for the application
const mockData = {
  user: {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://github.com/shadcn.png",
    joinDate: "January 2023",
    location: "New York, USA",
    phone: "+1 (555) 123-4567",
    bio: "Photography enthusiast with a passion for landscape and wildlife photography. Love to travel and capture moments.",
  },
  stats: {
    photos: 1234,
    albums: 56,
    friends: 89,
    storage: 65, // percentage used
  },
  photos: [
    {
      id: 1,
      name: "Beach Sunset",
      date: "Aug 15, 2023",
      url: "https://source.unsplash.com/random/800x600/?sunset",
      album: "Summer Vacation",
    },
    {
      id: 2,
      name: "Mountain View",
      date: "Jul 22, 2023",
      url: "https://source.unsplash.com/random/800x600/?mountain",
      album: "Hiking Trip",
    },
    {
      id: 3,
      name: "City Skyline",
      date: "Jun 10, 2023",
      url: "https://source.unsplash.com/random/800x600/?city",
      album: "Urban Adventures",
    },
    {
      id: 4,
      name: "Forest Trail",
      date: "May 5, 2023",
      url: "https://source.unsplash.com/random/800x600/?forest",
      album: "Nature Walks",
    },
    {
      id: 5,
      name: "Lake Reflection",
      date: "Apr 18, 2023",
      url: "https://source.unsplash.com/random/800x600/?lake",
      album: "Summer Vacation",
    },
    {
      id: 6,
      name: "Desert Landscape",
      date: "Mar 7, 2023",
      url: "https://source.unsplash.com/random/800x600/?desert",
      album: "Road Trip",
    },
    {
      id: 7,
      name: "Waterfall",
      date: "Feb 14, 2023",
      url: "https://source.unsplash.com/random/800x600/?waterfall",
      album: "Nature Walks",
    },
    {
      id: 8,
      name: "Autumn Colors",
      date: "Jan 30, 2023",
      url: "https://source.unsplash.com/random/800x600/?autumn",
      album: "Seasonal Photos",
    },
  ],
  albums: [
    { id: 1, name: "Summer Vacation", count: 48, cover: "https://source.unsplash.com/random/300x300/?vacation" },
    { id: 2, name: "Family Reunion", count: 32, cover: "https://source.unsplash.com/random/300x300/?family" },
    { id: 3, name: "Birthday Party", count: 24, cover: "https://source.unsplash.com/random/300x300/?birthday" },
    { id: 4, name: "Work Trip", count: 16, cover: "https://source.unsplash.com/random/300x300/?business" },
    { id: 5, name: "Hiking Adventures", count: 36, cover: "https://source.unsplash.com/random/300x300/?hiking" },
    { id: 6, name: "Food Collection", count: 42, cover: "https://source.unsplash.com/random/300x300/?food" },
  ],
  videos: [
    {
      id: 1,
      name: "Beach Vacation",
      duration: "2:45",
      date: "Aug 15, 2023",
      thumbnail: "https://source.unsplash.com/random/800x450/?beach",
    },
    {
      id: 2,
      name: "Family Gathering",
      duration: "5:12",
      date: "Jul 22, 2023",
      thumbnail: "https://source.unsplash.com/random/800x450/?family",
    },
    {
      id: 3,
      name: "Mountain Hike",
      duration: "3:30",
      date: "Jun 10, 2023",
      thumbnail: "https://source.unsplash.com/random/800x450/?mountain",
    },
    {
      id: 4,
      name: "City Tour",
      duration: "4:18",
      date: "May 5, 2023",
      thumbnail: "https://source.unsplash.com/random/800x450/?city",
    },
    {
      id: 5,
      name: "Birthday Party",
      duration: "6:24",
      date: "Apr 18, 2023",
      thumbnail: "https://source.unsplash.com/random/800x450/?birthday",
    },
    {
      id: 6,
      name: "Concert Highlights",
      duration: "8:05",
      date: "Mar 7, 2023",
      thumbnail: "https://source.unsplash.com/random/800x450/?concert",
    },
  ],
  friends: [
    { id: 1, name: "Alex Johnson", email: "alex@example.com", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "Sarah Williams", email: "sarah@example.com", avatar: "https://i.pravatar.cc/150?img=2" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", avatar: "https://i.pravatar.cc/150?img=3" },
    { id: 4, name: "Emily Davis", email: "emily@example.com", avatar: "https://i.pravatar.cc/150?img=4" },
    { id: 5, name: "David Miller", email: "david@example.com", avatar: "https://i.pravatar.cc/150?img=5" },
    { id: 6, name: "Jessica Wilson", email: "jessica@example.com", avatar: "https://i.pravatar.cc/150?img=6" },
  ],
  friendRequests: [
    {
      id: 1,
      name: "Taylor Smith",
      email: "taylor@example.com",
      avatar: "https://i.pravatar.cc/150?img=7",
      time: "2 hours ago",
    },
    {
      id: 2,
      name: "Jordan Lee",
      email: "jordan@example.com",
      avatar: "https://i.pravatar.cc/150?img=8",
      time: "Yesterday",
    },
    {
      id: 3,
      name: "Casey Jones",
      email: "casey@example.com",
      avatar: "https://i.pravatar.cc/150?img=9",
      time: "3 days ago",
    },
  ],
  suggestedFriends: [
    { id: 1, name: "Riley Thompson", mutualFriends: 5, avatar: "https://i.pravatar.cc/150?img=10" },
    { id: 2, name: "Morgan Wilson", mutualFriends: 3, avatar: "https://i.pravatar.cc/150?img=11" },
    { id: 3, name: "Jamie Garcia", mutualFriends: 2, avatar: "https://i.pravatar.cc/150?img=12" },
    { id: 4, name: "Quinn Martinez", mutualFriends: 7, avatar: "https://i.pravatar.cc/150?img=13" },
    { id: 5, name: "Avery Robinson", mutualFriends: 1, avatar: "https://i.pravatar.cc/150?img=14" },
    { id: 6, name: "Jordan Lee", mutualFriends: 4, avatar: "https://i.pravatar.cc/150?img=15" },
  ],
  documents: [
    { id: 1, name: "Project Proposal.docx", size: "2.4 MB", modified: "Today", type: "Word" },
    { id: 2, name: "Financial Report.xlsx", size: "1.8 MB", modified: "Yesterday", type: "Excel" },
    { id: 3, name: "Presentation.pptx", size: "5.2 MB", modified: "Last week", type: "PowerPoint" },
    { id: 4, name: "Meeting Notes.pdf", size: "0.8 MB", modified: "2 weeks ago", type: "PDF" },
    { id: 5, name: "Research Paper.docx", size: "3.1 MB", modified: "Last month", type: "Word" },
  ],
  trashItems: [
    { id: 1, name: "Beach Photo.jpg", type: "Photo", deletedDate: "2 days ago" },
    { id: 2, name: "Family Video.mp4", type: "Video", deletedDate: "1 week ago" },
    { id: 3, name: "Project Notes.docx", type: "Document", deletedDate: "2 weeks ago" },
    { id: 4, name: "Summer Album", type: "Album", deletedDate: "3 weeks ago" },
    { id: 5, name: "Meeting Recording.mp3", type: "Audio", deletedDate: "1 month ago" },
  ],
  recentActivity: [
    { id: 1, action: "Uploaded 12 photos to 'Summer Vacation'", time: "2 hours ago" },
    { id: 2, action: "Created new album 'Family Reunion'", time: "Yesterday" },
    { id: 3, action: "Shared 'Work Project' with 3 friends", time: "2 days ago" },
    { id: 4, action: "Deleted 5 photos from 'Old Photos'", time: "1 week ago" },
  ],
  recentUploads: [
    { id: 1, name: "Vacation Photos", type: "Album", date: "2 hours ago" },
    { id: 2, name: "Family Video", type: "Video", date: "Yesterday" },
    { id: 3, name: "Work Documents", type: "Document", date: "3 days ago" },
  ],
}

// Provider component
export function AppProvider({ children }) {
  const [user, setUser] = useState(mockData.user)
  const [stats, setStats] = useState(mockData.stats)
  const [photos, setPhotos] = useState(mockData.photos)
  const [albums, setAlbums] = useState(mockData.albums)
  const [videos, setVideos] = useState(mockData.videos)
  const [friends, setFriends] = useState(mockData.friends)
  const [friendRequests, setFriendRequests] = useState(mockData.friendRequests)
  const [suggestedFriends, setSuggestedFriends] = useState(mockData.suggestedFriends)
  const [documents, setDocuments] = useState(mockData.documents)
  const [trashItems, setTrashItems] = useState(mockData.trashItems)
  const [recentActivity, setRecentActivity] = useState(mockData.recentActivity)
  const [recentUploads, setRecentUploads] = useState(mockData.recentUploads)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  // Load data from localStorage on initial render
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode")
    if (storedDarkMode !== null) {
      setIsDarkMode(JSON.parse(storedDarkMode))
    }

    const storedSidebarState = localStorage.getItem("isSidebarOpen")
    if (storedSidebarState !== null) {
      setIsSidebarOpen(JSON.parse(storedSidebarState))
    }
  }, [])

  // Save preferences to localStorage when they change
  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode))
    localStorage.setItem("isSidebarOpen", JSON.stringify(isSidebarOpen))
  }, [isDarkMode, isSidebarOpen])

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  // Function to add a photo
  const addPhoto = (photo) => {
    const newPhoto = {
      id: photos.length + 1,
      ...photo,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    }
    setPhotos([newPhoto, ...photos])

    // Update stats
    setStats((prev) => ({
      ...prev,
      photos: prev.photos + 1,
    }))

    // Add to recent activity
    const newActivity = {
      id: recentActivity.length + 1,
      action: `Uploaded a new photo: "${photo.name}"`,
      time: "Just now",
    }
    setRecentActivity([newActivity, ...recentActivity])
  }

  // Function to create an album
  const createAlbum = (album) => {
    const newAlbum = {
      id: albums.length + 1,
      ...album,
      count: 0,
    }
    setAlbums([newAlbum, ...albums])

    // Update stats
    setStats((prev) => ({
      ...prev,
      albums: prev.albums + 1,
    }))

    // Add to recent activity
    const newActivity = {
      id: recentActivity.length + 1,
      action: `Created new album: "${album.name}"`,
      time: "Just now",
    }
    setRecentActivity([newActivity, ...recentActivity])
  }

  // Function to add a friend
  const addFriend = (friendId) => {
    const friend = suggestedFriends.find((f) => f.id === friendId)
    if (friend) {
      setFriends([...friends, friend])
      setSuggestedFriends(suggestedFriends.filter((f) => f.id !== friendId))

      // Update stats
      setStats((prev) => ({
        ...prev,
        friends: prev.friends + 1,
      }))

      // Add to recent activity
      const newActivity = {
        id: recentActivity.length + 1,
        action: `Added ${friend.name} as a friend`,
        time: "Just now",
      }
      setRecentActivity([newActivity, ...recentActivity])
    }
  }

  // Function to accept a friend request
  const acceptFriendRequest = (requestId) => {
    const request = friendRequests.find((r) => r.id === requestId)
    if (request) {
      const newFriend = {
        id: friends.length + 1,
        name: request.name,
        email: request.email,
        avatar: request.avatar,
      }
      setFriends([...friends, newFriend])
      setFriendRequests(friendRequests.filter((r) => r.id !== requestId))

      // Update stats
      setStats((prev) => ({
        ...prev,
        friends: prev.friends + 1,
      }))

      // Add to recent activity
      const newActivity = {
        id: recentActivity.length + 1,
        action: `Accepted friend request from ${request.name}`,
        time: "Just now",
      }
      setRecentActivity([newActivity, ...recentActivity])
    }
  }

  // Function to reject a friend request
  const rejectFriendRequest = (requestId) => {
    setFriendRequests(friendRequests.filter((r) => r.id !== requestId))
  }

  // Function to move an item to trash
  const moveToTrash = (itemType, itemId) => {
    let item
    let newTrashItem

    if (itemType === "photo") {
      item = photos.find((p) => p.id === itemId)
      setPhotos(photos.filter((p) => p.id !== itemId))
      newTrashItem = {
        id: trashItems.length + 1,
        name: `${item.name}.jpg`,
        type: "Photo",
        deletedDate: "Just now",
      }
    } else if (itemType === "album") {
      item = albums.find((a) => a.id === itemId)
      setAlbums(albums.filter((a) => a.id !== itemId))
      newTrashItem = {
        id: trashItems.length + 1,
        name: item.name,
        type: "Album",
        deletedDate: "Just now",
      }
    } else if (itemType === "document") {
      item = documents.find((d) => d.id === itemId)
      setDocuments(documents.filter((d) => d.id !== itemId))
      newTrashItem = {
        id: trashItems.length + 1,
        name: item.name,
        type: "Document",
        deletedDate: "Just now",
      }
    } else if (itemType === "video") {
      item = videos.find((v) => v.id === itemId)
      setVideos(videos.filter((v) => v.id !== itemId))
      newTrashItem = {
        id: trashItems.length + 1,
        name: `${item.name}.mp4`,
        type: "Video",
        deletedDate: "Just now",
      }
    }

    if (newTrashItem) {
      setTrashItems([newTrashItem, ...trashItems])

      // Add to recent activity
      const newActivity = {
        id: recentActivity.length + 1,
        action: `Moved ${newTrashItem.name} to trash`,
        time: "Just now",
      }
      setRecentActivity([newActivity, ...recentActivity])
    }
  }

  // Function to restore from trash
  const restoreFromTrash = (itemId) => {
    const item = trashItems.find((t) => t.id === itemId)
    if (item) {
      setTrashItems(trashItems.filter((t) => t.id !== itemId))

      // Add to recent activity
      const newActivity = {
        id: recentActivity.length + 1,
        action: `Restored ${item.name} from trash`,
        time: "Just now",
      }
      setRecentActivity([newActivity, ...recentActivity])

      // TODO: Add logic to restore to the appropriate collection based on type
    }
  }

  // Function to permanently delete from trash
  const permanentlyDelete = (itemId) => {
    const item = trashItems.find((t) => t.id === itemId)
    if (item) {
      setTrashItems(trashItems.filter((t) => t.id !== itemId))

      // Add to recent activity
      const newActivity = {
        id: recentActivity.length + 1,
        action: `Permanently deleted ${item.name}`,
        time: "Just now",
      }
      setRecentActivity([newActivity, ...recentActivity])
    }
  }

  // Function to update user profile
  const updateProfile = (updatedProfile) => {
    setUser({
      ...user,
      ...updatedProfile,
    })

    // Add to recent activity
    const newActivity = {
      id: recentActivity.length + 1,
      action: "Updated profile information",
      time: "Just now",
    }
    setRecentActivity([newActivity, ...recentActivity])
  }

  // Value object to be provided to consumers
  const value = {
    user,
    stats,
    photos,
    albums,
    videos,
    friends,
    friendRequests,
    suggestedFriends,
    documents,
    trashItems,
    recentActivity,
    recentUploads,
    isDarkMode,
    isSidebarOpen,
    toggleDarkMode,
    toggleSidebar,
    addPhoto,
    createAlbum,
    addFriend,
    acceptFriendRequest,
    rejectFriendRequest,
    moveToTrash,
    restoreFromTrash,
    permanentlyDelete,
    updateProfile,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// Custom hook for using the context
export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}

