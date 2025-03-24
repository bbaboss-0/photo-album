import { Files, FileText, Download, Share2, Trash } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import PageHeader from "../component/PageHeader"

function Document() {
  const documents = [
    { id: 1, name: "Project Proposal.docx", size: "2.4 MB", modified: "Today", type: "Word" },
    { id: 2, name: "Financial Report.xlsx", size: "1.8 MB", modified: "Yesterday", type: "Excel" },
    { id: 3, name: "Presentation.pptx", size: "5.2 MB", modified: "Last week", type: "PowerPoint" },
    { id: 4, name: "Meeting Notes.pdf", size: "0.8 MB", modified: "2 weeks ago", type: "PDF" },
    { id: 5, name: "Research Paper.docx", size: "3.1 MB", modified: "Last month", type: "Word" },
  ]

  const getFileIcon = (type) => {
    switch (type) {
      case "Word":
        return <FileText className="h-8 w-8 text-blue-500" />
      case "Excel":
        return <FileText className="h-8 w-8 text-green-500" />
      case "PowerPoint":
        return <FileText className="h-8 w-8 text-orange-500" />
      case "PDF":
        return <FileText className="h-8 w-8 text-red-500" />
      default:
        return <FileText className="h-8 w-8 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Documents"
        description="Manage your document files"
        icon={Files}
        actionLabel="Upload Document"
        onAction={() => alert("Upload document")}
      />

      <Card>
        <CardHeader>
          <CardTitle>Your Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between rounded-lg border p-4 dark:border-gray-800"
              >
                <div className="flex items-center gap-4">
                  {getFileIcon(doc.type)}
                  <div>
                    <h3 className="font-medium">{doc.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {doc.size} • Modified {doc.modified}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="12" cy="5" r="1" />
                          <circle cx="12" cy="19" r="1" />
                        </svg>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Trash className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Document

