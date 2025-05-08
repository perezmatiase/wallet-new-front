// components/Objectives.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle } from "lucide-react";

interface ObjectiveBoolean {
  type: "boolean";
  title: string;
  achieved: boolean;
}

interface ObjectiveProgress {
  type: "progress";
  title: string;
  current: number;
  goal: number;
}

type Objective = ObjectiveBoolean | ObjectiveProgress;

interface ObjectivesProps {
  objectives: Objective[];
  title?: string; // 👈 opcional para personalizar el título
}

export function Objectives({ objectives, title = "Objetivos del mes" }: ObjectivesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {objectives.map((obj, index) => (
          <Card key={index}>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="flex-1">
                <p className="text-base font-semibold">{obj.title}</p>
                {obj.type === "progress" && (
                  <div className="mt-2">
                    <Progress value={(obj.current / obj.goal) * 100} />
                    <p className="text-sm text-muted-foreground mt-1">
                      {obj.current} / {obj.goal} alcanzado
                    </p>
                  </div>
                )}
              </div>

              {obj.type === "boolean" ? (
                obj.achieved ? (
                  <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    Cumplido
                  </Badge>
                ) : (
                  <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
                    <XCircle className="h-4 w-4" />
                    Pendiente
                  </Badge>
                )
              ) : (
                <Badge variant="outline">
                  {Math.round((obj.current / obj.goal) * 100)}%
                </Badge>
              )}
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
