"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarDays } from "lucide-react"

interface EventItem {
  date: Date
  description: string
  category: "Balance" | "Dividendo" | "Aviso"
}

interface UpcomingEventsProps {
  events: EventItem[]
}

export function UpcomingEvents({ events }: UpcomingEventsProps) {
  const today = new Date()

  return (
    <Card className="h-full flex flex-col"> 
      <CardHeader>
        <CardTitle>Eventos próximos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {events.map((event, index) => {
          const isPast = event.date < today
          const categoryColor =
            event.category === "Balance"
              ? "bg-blue-100 text-blue-800"
              : event.category === "Dividendo"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"

          return (
            <div
              key={index}
              className={cn(
                "border rounded-md px-3 py-2 flex justify-between items-start",
                isPast && "opacity-50 pointer-events-none"
              )}
            >
              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center w-16 pt-1">
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">
                    {format(event.date, "dd/MM")}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium">{event.description}</p>
                </div>
              </div>

              <Badge className={cn("mt-1", categoryColor)}>
                {event.category}
              </Badge>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
