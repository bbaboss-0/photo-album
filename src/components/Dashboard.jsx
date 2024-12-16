import { useState } from 'react'
import { Menu, Home, Image, FolderPlus, Settings, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const chartData = [
  { name: "Jan", total: 45 },
  { name: "Feb", total: 32 },
  { name: "Mar", total: 67 },
  { name: "Apr", total: 53 },
  { name: "May", total: 78 },
  { name: "Jun", total: 92 },
]

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchTerm)
  }

  return (
    (<div className="flex h-screen bg-gray-100">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 left-4 z-50 md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
      <aside className="hidden md:flex bg-gray-800 text-white w-64 flex-col">
        <Sidebar />
      </aside>
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Photo Album Dashboard</h1>
          
          <form
            onSubmit={handleSearch}
            className="flex w-full max-w-sm items-center space-x-2 mb-6">
            <Input
              type="text"
              placeholder="Search photos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Photo Upload Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={chartData}>
                  <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false} />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`} />
                  <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>)
  );
}

function Sidebar() {
  return (
    (<nav className="py-4">
      <SheetHeader className="px-4 mb-4">
        <SheetTitle>Photo Album</SheetTitle>
      </SheetHeader>
      <div className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Image className="mr-2 h-4 w-4" />
          Albums
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <FolderPlus className="mr-2 h-4 w-4" />
          Upload
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>
    </nav>)
  );
}

