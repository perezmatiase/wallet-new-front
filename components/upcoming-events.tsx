// components/UpcomingEvents.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // si tienes la función cn para combinar clases
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";

interface EventItem {
  date: Date;
  description: string;
  category: "Balance" | "Dividendo" | "Aviso";
}

interface UpcomingEventsProps {
  events: EventItem[];
}

export function UpcomingEvents({ events }: UpcomingEventsProps) {
  const today = new Date();

  return (
    <div className="space-y-4">
      {events.map((event, index) => {
        const isPast = event.date < today;
        const categoryColor =
          event.category === "Balance"
            ? "bg-blue-100 text-blue-800"
            : event.category === "Dividendo"
            ? "bg-green-100 text-green-800"
            : "bg-yellow-100 text-yellow-800";

        return (
          <Card
            key={index}
            className={cn(
              "flex items-center gap-4",
              isPast && "opacity-50 pointer-events-none"
            )}
          >
            <div className="flex flex-col items-center w-24">
              <CalendarDays className="h-5 w-5 mb-1 text-muted-foreground" />
              <div className="text-sm font-medium">
                {format(event.date, "dd/MM/yyyy")}
              </div>
            </div>
            <CardContent className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold">{event.description}</p>
                <Badge className={categoryColor}>{event.category}</Badge>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
