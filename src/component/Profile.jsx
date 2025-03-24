"use client"

import { useState } from "react"
import { UserRound, Mail, Phone, MapPin, Calendar, Edit, Camera, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import PageHeader from "./PageHeader"
import { useApp } from "./AppContext"

function Profile() {
  const { user, stats, recentActivity, updateProfile } = useApp()
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editedProfile, setEditedProfile] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    location: user.location,
    bio: user.bio,
  })

  const handleUpdateProfile = () => {
    updateProfile(editedProfile)
    setIsEditDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Profile"
        description="Manage your account information"
        icon={UserRound}
        actionLabel="Edit Profile"
        onAction={() => setIsEditDialogOpen(true)}
      />

      <div className=" grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardContent className=" p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <Avatar className="h-24 w-24 border-4 border-background">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute bottom-0 right-0 rounded-full"
                  onClick={() => alert("Change profile picture")}
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-sm text-muted-foreground">Member since {user.joinDate}</p>

              <div className="mt-6 grid w-full grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-2">
                <div className="text-center">
                  <p className="text-2xl font-bold">{stats.photos}</p>
                  <p className="text-xs text-muted-foreground">Photos</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{stats.albums}</p>
                  <p className="text-xs text-muted-foreground">Albums</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{stats.friends}</p>
                  <p className="text-xs text-muted-foreground">Friends</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">102</p>
                  <p className="text-xs text-muted-foreground">Following</p>
                </div>
              </div>

              <div className="mt-6 w-full space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{user.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{user.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Joined {user.joinDate}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent className="p-0">
            <Tabs defaultValue="about">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                  value="about"
                  className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="activity"
                  className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Activity
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Settings
                </TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Bio</h3>
                    <Button variant="ghost" size="sm" onClick={() => setIsEditDialogOpen(true)}>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </Button>
                  </div>
                  <p className="text-muted-foreground">{user.bio}</p>

                  <h3 className="text-lg font-medium">Interests</h3>
                  <div className="flex flex-wrap gap-2 text-white">
                    {["Photography", "Travel", "Nature", "Wildlife", "Landscapes"].map((interest, index) => (
                      <div key={index} className="rounded-full bg-secondary px-3 py-1 text-xs">
                        {interest}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="activity" className="p-6">
                <h3 className="mb-4 text-lg font-medium">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 border-b pb-4 last:border-0 dark:border-gray-800"
                    >
                      <div className="rounded-full bg-primary/10 p-2">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="settings" className="p-6">
                <h3 className="mb-4 text-lg font-medium">Account Settings</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" onClick={() => setIsEditDialogOpen(true)}>
                    <Edit className="mr-2 h-4 w-4" /> Edit Profile Information
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Camera className="mr-2 h-4 w-4" /> Change Profile Picture
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" /> Delete Account
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Edit Profile Dialog */}
      <Dialog  open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>Update your personal information</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={editedProfile.name}
                onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={editedProfile.email}
                onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={editedProfile.phone}
                onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={editedProfile.location}
                onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={editedProfile.bio}
                onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateProfile}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Profile

