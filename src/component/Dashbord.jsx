import { LayoutDashboard, BarChart3, TrendingUp, Users, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PageHeader from "./PageHeader"
import { useApp } from "./AppContext"

function Dashboard() {
  const { stats, recentActivity } = useApp()

  const statsData = [
    { title: "Total Photos", value: stats.photos.toString(), icon: BarChart3, change: "+12%" },
    { title: "Total Albums", value: stats.albums.toString(), icon: TrendingUp, change: "+5%" },
    { title: "Friends", value: stats.friends.toString(), icon: Users, change: "+3%" },
    { title: "Storage Used", value: `${stats.storage}%`, icon: Clock, change: "+8%" },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Overview of your photo album activity"
        icon={LayoutDashboard}
        actionLabel="New Album"
        onAction={() => alert("Create new album")}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest actions and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 border-b border-gray-100 pb-4 last:border-0 dark:border-gray-800"
              >
                <div className="rounded-full bg-primary/10 p-2">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard

