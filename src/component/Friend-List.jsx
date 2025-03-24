"use client"

import { useState } from "react"
import { Handshake, UserPlus, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import PageHeader from "../component/PageHeader"
import { useApp } from "./AppContext"

function FriendList() {
  const { friends } = useApp()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFriends = friends.filter(
    (friend) =>
      friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      friend.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <PageHeader
        title="Friend List"
        description="Manage your connections"
        icon={Handshake}
        actionLabel="Add Friend"
        onAction={() => alert("Add friend")}
      />

      <div className="relative mb-4">
        <Search className="absolute right-3  top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search friends..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredFriends.map((friend) => (
              <div key={friend.id} className="flex items-center gap-4 rounded-lg border p-3 dark:border-gray-800">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={friend.avatar} alt={friend.name} />
                  <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <h3 className="font-medium">{friend.name}</h3>
                  <p className="truncate text-sm text-muted-foreground">{friend.email}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <UserPlus className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          {filteredFriends.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Handshake className="mb-2 h-12 w-12 text-muted-foreground" />
              <h3 className="mb-1 text-lg font-medium">No friends found</h3>
              <p className="text-sm text-muted-foreground">Try adjusting your search query</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default FriendList

