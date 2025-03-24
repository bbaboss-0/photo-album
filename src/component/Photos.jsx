"use client"

import { useState } from "react"
import { ImageIcon, Grid, List, Filter, MoreHorizontal, Heart, Download, Share2, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PageHeader from "./PageHeader"
import { useApp } from "./AppContext"

function Photos() {
  const { photos, albums, addPhoto, moveToTrash } = useApp()
  const [viewMode, setViewMode] = useState("grid")
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [newPhoto, setNewPhoto] = useState({
    name: "",
    album: "",
    url: "",
  })

  const handleUpload = () => {
    if (newPhoto.name && newPhoto.url) {
      addPhoto(newPhoto)
      setNewPhoto({ name: "", album: "", url: "" })
      setIsUploadDialogOpen(false)
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Photos"
        description="Browse all your photos"
        icon={ImageIcon}
        actionLabel="Upload Photos"
        onAction={() => setIsUploadDialogOpen(true)}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="icon" onClick={() => setViewMode("grid")}>
            <Grid className="h-4 w-4" />
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="icon" onClick={() => setViewMode("list")}>
            <List className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="outline" size="sm">
          <Filter className="mr-2 h-4 w-4" /> Filter
        </Button>
      </div>

      {viewMode === "grid" ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-lg">
              <img
                src={photo.url || "/placeholder.svg"}
                alt={photo.name}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="font-medium text-white">{photo.name}</h3>
                <p className="text-sm text-white/80">{photo.date}</p>
              </div>
              <div className="absolute right-2 top-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className=" text-white hover:bg-black/20">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white" align="end">
                    <DropdownMenuItem>
                      <Heart className="mr-2 h-4 w-4" /> Add to favorites
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" /> Download
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share2 className="mr-2 h-4 w-4" /> Share
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => moveToTrash("photo", photo.id)}>
                      <Trash2 className="mr-2 h-4 w-4" /> Move to Trash
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="divide-y dark:divide-gray-800">
              {photos.map((photo) => (
                <div key={photo.id} className="flex items-center gap-4 p-4">
                  <img
                    src={photo.url || "/placeholder.svg"}
                    alt={photo.name}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{photo.name}</h3>
                    <p className="text-sm text-muted-foreground">{photo.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => moveToTrash("photo", photo.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Upload Photo Dialog */}
      <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Upload New Photo</DialogTitle>
            <DialogDescription>Add a new photo to your collection</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="photo-name">Photo Name</Label>
              <Input
                id="photo-name"
                value={newPhoto.name}
                onChange={(e) => setNewPhoto({ ...newPhoto, name: e.target.value })}
                placeholder="Enter photo name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="photo-url">Photo URL</Label>
              <Input
                id="photo-url"
                value={newPhoto.url}
                onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
                placeholder="Enter photo URL"
              />
            </div>
            <div className=" grid gap-2">
              <Label htmlFor="photo-album">Album</Label>
              <Select value={newPhoto.album} onValueChange={(value) => setNewPhoto({ ...newPhoto, album: value })}>
                <SelectTrigger id="photo-album">
                  <SelectValue placeholder="Select an album" />
                </SelectTrigger>
                <SelectContent className="bg-slate-50">
                  {albums.map((album) => (
                    <SelectItem key={album.id} value={album.name}>
                      {album.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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

export default Photos

