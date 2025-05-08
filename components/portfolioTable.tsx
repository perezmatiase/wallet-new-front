"use client"

import { Eye } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Portfolio {
  id: string
  name: string
  currentValue: number
  investedValue: number
  profitUSD: number
  profitPercentageUSD: number
  profitARS: number
  profitPercentageARS: number
}

interface PortfolioTableProps {
  data: Portfolio[]
}

export function PortfolioTable({ data }: PortfolioTableProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Portafolios</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Valor Actual</TableHead>
              <TableHead>Ganancia (ARS)</TableHead>
              <TableHead>Ganancia (USD)</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((portfolio) => (
              <TableRow key={portfolio.id}>
                <TableCell>{portfolio.name}</TableCell>
                <TableCell>
                  ${portfolio.currentValue.toLocaleString()}
                  <div className="text-sm text-muted-foreground">
                    Invertido: ${portfolio.investedValue.toLocaleString()}
                  </div>
                </TableCell>
                <TableCell>
                  ${portfolio.profitARS.toLocaleString()}
                  <div className="text-sm text-muted-foreground">
                    {portfolio.profitPercentageARS}%
                  </div>
                </TableCell>
                <TableCell>
                  ${portfolio.profitUSD.toLocaleString()}
                  <div className="text-sm text-muted-foreground">
                    {portfolio.profitPercentageUSD}%
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Eye className="cursor-pointer text-muted-foreground hover:text-primary" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
