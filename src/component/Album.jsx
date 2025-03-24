"use client"

import { useState } from "react"
import { AlbumIcon, Plus, MoreHorizontal, Heart, Share2, Trash2 } from "lucide-react"
import { Card } from "@/components/ui/card"
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
import PageHeader from "./PageHeader"
import { useApp } from "./AppContext"

function Album() {
  const { albums, createAlbum, moveToTrash } = useApp()
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newAlbum, setNewAlbum] = useState({
    name: "",
    cover: "",
  })

  const handleCreateAlbum = () => {
    if (newAlbum.name) {
      createAlbum(newAlbum)
      setNewAlbum({ name: "", cover: "" })
      setIsCreateDialogOpen(false)
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Albums"
        description="Organize your photos into collections"
        icon={AlbumIcon}
        actionLabel="Create Album"
        onAction={() => setIsCreateDialogOpen(true)}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className=" overflow-hidden border-dashed">
          <Button
            variant="ghost"
            className="flex h-full w-full flex-col items-center  justify-center p-6"
            onClick={() => setIsCreateDialogOpen(true)}
          >
            <div className="rounded-full bg-primary/10 p-3">
              <Plus className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-3  font-medium">Create New Album</h3>
          </Button>
        </Card>

        {albums.map((album) => (
          <Card key={album.id} className="overflow-hidden">
            <div className="relative">
              <img
                src={album.cover || "/placeholder.svg"}
                alt={album.name}
                className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-medium text-white">{album.name}</h3>
                <p className="text-sm text-white/80">{album.count} photos</p>
              </div>
              <div className="absolute right-2 top-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-black/20">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent  align="end">
                    <DropdownMenuItem>
                      <Heart className=" mr-2 h-4 w-4" /> Add to favorites
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share2 className="mr-2 h-4 w-4" /> Share album
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => moveToTrash("album", album.id)}>
                      <Trash2 className="mr-2 h-4 w-4" /> Move to Trash
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Create Album Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Create New Album</DialogTitle>
            <DialogDescription>Create a new album to organize your photos</DialogDescription>
          </DialogHeader>
          <div className=" grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="album-name">Album Name</Label>
              <Input
                id="album-name"
                value={newAlbum.name}
                onChange={(e) => setNewAlbum({ ...newAlbum, name: e.target.value })}
                placeholder="Enter album name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="album-cover">Cover Image URL (optional)</Label>
              <Input
                id="album-cover"
                value={newAlbum.cover}
                onChange={(e) => setNewAlbum({ ...newAlbum, cover: e.target.value })}
                placeholder="Enter cover image URL"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateAlbum}>Create Album</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Album

