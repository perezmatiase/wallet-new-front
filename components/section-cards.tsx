'use client'

import { useEffect, useState } from "react";
import api from "@/lib/axios"; //
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  const [values, setValues] = useState({
    totalWealth: 0,
    totalInvested: 0,
    totalGains: 0,
    liquidMoney: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const userId = '2de06395-4222-4425-a494-7cb522927765';
        const response = await api.get(`/api/dashboard/${userId}`);
        
        setValues({
          totalWealth: response.data.price,
          totalInvested: response.data.price,
          totalGains: response.data.price,
          liquidMoney: response.data.price,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    }
    

    fetchData();
  }, []);

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Patrimonio Tota (ARS)</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ${values.totalWealth.toLocaleString()}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Monto total invertido: ${values.totalInvested.toLocaleString()}
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Ganancias Totales (ARS)</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ${values.totalGains.toLocaleString()}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Monto total invertido: ${values.totalInvested.toLocaleString()}
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Dinero Líquido (ARS)</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ${values.liquidMoney.toLocaleString()}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Monto total invertido: ${values.totalInvested.toLocaleString()}
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Monto en Inversiones (ARS)</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ${values.totalInvested.toLocaleString()}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Monto total invertido: ${values.totalInvested.toLocaleString()}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
