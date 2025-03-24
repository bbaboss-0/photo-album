"use client"

import { useState } from "react"
import { Trash2, RefreshCw, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import PageHeader from "./PageHeader"
import { useApp } from "./AppContext"

function Trash() {
  const { trashItems, restoreFromTrash, permanentlyDelete } = useApp()
  const [selectedItems, setSelectedItems] = useState([])

  const toggleSelectAll = () => {
    if (selectedItems.length === trashItems.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(trashItems.map((item) => item.id))
    }
  }

  const toggleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id))
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }

  const handleRestoreSelected = () => {
    selectedItems.forEach((id) => restoreFromTrash(id))
    setSelectedItems([])
  }

  const handleDeleteSelected = () => {
    selectedItems.forEach((id) => permanentlyDelete(id))
    setSelectedItems([])
  }

  return (
    <div className="space-y-6">
      <PageHeader title="Trash" description="Recently deleted items" icon={Trash2} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Deleted Items</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled={selectedItems.length === 0} onClick={handleRestoreSelected}>
              <RefreshCw className="mr-2 h-4 w-4" /> Restore Selected
            </Button>
            <Button
              variant="destructive"
              size="sm"
              disabled={selectedItems.length === 0}
              onClick={handleDeleteSelected}
            >
              <X className="mr-2 h-4 w-4" /> Delete Permanently
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border dark:border-gray-800">
            <div className="flex items-center justify-between border-b p-4 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={selectedItems.length === trashItems.length && trashItems.length > 0}
                  onCheckedChange={toggleSelectAll}
                />
                <span className="text-sm font-medium">Select All</span>
              </div>
              <p className="text-sm text-muted-foreground">Items will be permanently deleted after 30 days</p>
            </div>
            <div className="divide-y dark:divide-gray-800">
              {trashItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4">
                  <Checkbox
                    checked={selectedItems.includes(item.id)}
                    onCheckedChange={() => toggleSelectItem(item.id)}
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.type} • Deleted {item.deletedDate}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => restoreFromTrash(item.id)}>
                      <RefreshCw className="mr-2 h-4 w-4" /> Restore
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                      onClick={() => permanentlyDelete(item.id)}
                    >
                      <X className="mr-2 h-4 w-4" /> Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Trash

