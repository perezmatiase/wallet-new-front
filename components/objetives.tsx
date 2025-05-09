"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

interface ObjectiveBoolean {
  type: "boolean"
  title: string
  achieved: boolean
  priority: number
}

interface ObjectiveProgress {
  type: "progress"
  title: string
  current: number
  goal: number
  priority: number
}

type Objective = ObjectiveBoolean | ObjectiveProgress

interface ObjectivesProps {
  objectives: Objective[]
  title?: string
}

export function Objectives({ objectives, title = "Objetivos del mes" }: ObjectivesProps) {
  const router = useRouter()

  const sortedObjectives = objectives
    .filter((obj): obj is Objective => obj && "priority" in obj && "type" in obj)
    .sort((a, b) => a.priority - b.priority)

  if (sortedObjectives.length === 0) {
    return (
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <Button onClick={() => router.push("/goals")}>
            Haz click aquí para configurarlos...
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {sortedObjectives.map((obj, index) => {
          const isProgress = obj.type === "progress"
          const progressPercent = isProgress ? (obj.current / obj.goal) * 100 : 0
          const isComplete = isProgress && progressPercent >= 100

          return (
            <div
              key={index}
              className="border rounded-md px-3 py-2 flex justify-between items-start"
            >
              <div className="flex-1">
                <p className="text-sm font-medium">{obj.title}</p>

                {isProgress && !isComplete && (
                  <div className="mt-1">
                    <Progress value={progressPercent} />
                    <p className="text-xs text-muted-foreground mt-1">
                      {obj.current} / {obj.goal} alcanzado
                    </p>
                  </div>
                )}
              </div>

              {obj.type === "boolean" || isComplete ? (
                obj.type === "boolean" && !obj.achieved ? (
                  <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
                    <XCircle className="h-4 w-4" />
                    Pendiente
                  </Badge>
                ) : (
                  <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    Cumplido
                  </Badge>
                )
              ) : (
                <Badge variant="outline" className="mt-1 whitespace-nowrap">
                  {Math.round(progressPercent)}%
                </Badge>
              )}
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
