"use client"

import { Handshake, Check, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import PageHeader from "./PageHeader"
import { useApp } from "./AppContext"

function FriendRequest() {
  const { friendRequests, acceptFriendRequest, rejectFriendRequest } = useApp()

  return (
    <div className="space-y-6">
      <PageHeader title="Friend Requests" description="Manage your incoming friend requests" icon={Handshake} />

      <Card>
        <CardHeader>
          <CardTitle>Pending Requests ({friendRequests.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {friendRequests.length > 0 ? (
            <div className="space-y-4">
              {friendRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between gap-4 rounded-lg border p-4 dark:border-gray-800"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={request.avatar} alt={request.name} />
                      <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{request.name}</h3>
                      <p className="text-sm text-muted-foreground">{request.email}</p>
                      <p className="text-xs text-muted-foreground">{request.time}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => rejectFriendRequest(request.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => acceptFriendRequest(request.id)}
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Handshake className="mb-2 h-12 w-12 text-muted-foreground" />
              <h3 className="mb-1 text-lg font-medium">No pending requests</h3>
              <p className="text-sm text-muted-foreground">
                When someone sends you a friend request, it will appear here
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default FriendRequest

