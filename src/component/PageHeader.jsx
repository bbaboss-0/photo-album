"use client"

import { Button } from "@/components/ui/button"

function PageHeader({ title, description, icon: Icon, actionLabel, onAction }) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 border-b border-gray-200 pb-5 dark:border-gray-800 sm:flex-row sm:items-center">
      <div className="flex items-center gap-3">
        {Icon && <Icon className="h-8 w-8 text-primary" />}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
      </div>
      {actionLabel && <Button onClick={onAction}>{actionLabel}</Button>}
    </div>
  )
}

export default PageHeader

