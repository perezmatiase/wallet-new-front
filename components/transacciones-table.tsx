"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AddTransactionModal from "./modals/AddTransactionModal";

const initialData2 = [{
}
];
const initialData = [
  {
    ticker: "AAPL",
    price: "$175",
    segment: "Tecnología",
    varMonthly: "+3.2%",
    varWeekly: "-0.5%",
    vardDaily: "+0.1%",
    holdings: [
      { portfolio: "Cartera 1", percentage: "40%" },
      { portfolio: "Cartera 2", percentage: "60%" }
    ]
  },
];

export default function TransaccionesTabla() {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredData = initialData.filter((item) =>
    item.ticker.toLowerCase().includes(search.toLowerCase()) //colocarle un if para saber si el item.ticker es empty
  );

  return (
    <Card className="rounded-xl border bg-card text-card-foreground shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Input
            placeholder="Buscar activo por ticker..."
            className="max-w-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={() => setIsModalOpen(true)}>+ Agregar Transacción</Button>
        </div>
      </CardHeader>
      
      <CardContent className="overflow-x-auto">
        {initialData.length === 0 ? (
          <p className="text-center text-muted-foreground py-4">Aún no tienes activos que mostrar</p>
        ) : filteredData.length === 0 ? (
          <p className="text-center text-muted-foreground py-4">No se encontraron activos para &quot;{search}&quot;</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticker</TableHead>
                <TableHead>Precio Actual (ARS)</TableHead>
                <TableHead>Segmento</TableHead>
                <TableHead>Var. Mensual</TableHead>
                <TableHead>Var. Semanal</TableHead>
                <TableHead>Var. Diaria</TableHead>
                <TableHead>Tenencia de Activo</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.ticker}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.segment}</TableCell>
                  <TableCell>{item.varMonthly}</TableCell>
                  <TableCell>{item.varWeekly}</TableCell>
                  <TableCell>{item.vardDaily}</TableCell>
                  <TableCell>
                    <ul className="space-y-1">
                      {item.holdings.map((h, i) => (
                        <li key={i}>
                          {h.portfolio}: <span className="font-medium">{h.percentage}</span>
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Ver</ Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
      <AddTransactionModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Card>
  );
}
