import { Users, UserPlus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import PageHeader from "../component/PageHeader"

function Discover() {
  const suggestedFriends = [
    { id: 1, name: "Riley Thompson", mutualFriends: 5, avatar: "https://i.pravatar.cc/150?img=10" },
    { id: 2, name: "Morgan Wilson", mutualFriends: 3, avatar: "https://i.pravatar.cc/150?img=11" },
    { id: 3, name: "Jamie Garcia", mutualFriends: 2, avatar: "https://i.pravatar.cc/150?img=12" },
    { id: 4, name: "Quinn Martinez", mutualFriends: 7, avatar: "https://i.pravatar.cc/150?img=13" },
    { id: 5, name: "Avery Robinson", mutualFriends: 1, avatar: "https://i.pravatar.cc/150?img=14" },
    { id: 6, name: "Jordan Lee", mutualFriends: 4, avatar: "https://i.pravatar.cc/150?img=15" },
  ]

  return (
    <div className="space-y-6">
      <PageHeader title="Discover People" description="Find new friends to connect with" icon={Users} />

      <Card>
        <CardHeader>
          <CardTitle>Suggested Friends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {suggestedFriends.map((friend) => (
              <div
                key={friend.id}
                className="flex flex-col items-center gap-4 rounded-lg border p-4 text-center dark:border-gray-800"
              >
                <Avatar className="h-16 w-16">
                  <AvatarImage src={friend.avatar} alt={friend.name} />
                  <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{friend.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {friend.mutualFriends} mutual {friend.mutualFriends === 1 ? "friend" : "friends"}
                  </p>
                </div>
                <Button className="w-full" size="sm">
                  <UserPlus className="mr-2 h-4 w-4" /> Add Friend
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Discover

