import { Video, Play, MoreHorizontal, Heart, Download, Share2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import PageHeader from "../component/PageHeader"

function Videos() {
  const videos = [
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
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        title="Videos"
        description="Browse all your video content"
        icon={Video}
        actionLabel="Upload Video"
        onAction={() => alert("Upload video")}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden">
            <div className="group relative">
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.name}
                className="aspect-video w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-white/20 text-white hover:bg-white/30"
                >
                  <Play className="h-6 w-6" />
                </Button>
              </div>
              <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                {video.duration}
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{video.name}</h3>
                  <p className="text-sm text-muted-foreground">{video.date}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Heart className="mr-2 h-4 w-4" /> Add to favorites
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" /> Download
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share2 className="mr-2 h-4 w-4" /> Share
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Videos

