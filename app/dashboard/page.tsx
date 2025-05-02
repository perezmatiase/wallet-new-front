import { AppSidebar } from "@/components/app-sidebar"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { PortfolioPieChart } from "@/components/PortfolioPieChart"
import { PortfolioTable } from "@/components/portfolioTable"
import TransactionsTable from "@/components/transacciones-table"

const mockPortfolios = [
  {
    id: "1",
    name: "Tech Portfolio",
    currentValue: 12000,
    investedValue: 10000,
    profitUSD: 500,
    profitPercentageUSD: 5,
    profitARS: 100000,
    profitPercentageARS: 10
  },
  {
    id: "2",
    name: "Energy Portfolio",
    currentValue: 8000,
    investedValue: 8500,
    profitUSD: -200,
    profitPercentageUSD: -2.35,
    profitARS: -40000,
    profitPercentageARS: -4.7
  },
  {
    id: "3",
    name: "Energy Portfolio",
    currentValue: 8000,
    investedValue: 8500,
    profitUSD: -200,
    profitPercentageUSD: -2.35,
    profitARS: -40000,
    profitPercentageARS: -4.7
  },
  {
    id: "4",
    name: "Energy Portfolio",
    currentValue: 8000,
    investedValue: 8500,
    profitUSD: -200,
    profitPercentageUSD: -2.35,
    profitARS: -40000,
    profitPercentageARS: -4.7
  },
  {
    id: "5",
    name: "Energy Portfolio",
    currentValue: 8000,
    investedValue: 8500,
    profitUSD: -200,
    profitPercentageUSD: -2.35,
    profitARS: -40000,
    profitPercentageARS: -4.7
  }
]

export default function Page() {
  
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 65)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-6">
                <div className="lg:col-span-2">
                  <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-4">
                    <PortfolioTable data={mockPortfolios} />
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-4">
                    <PortfolioPieChart />
                  </div>
                </div>
              </div>


              <div className="grid grid-cols-1 gap-6 px-4 lg:px-6">
                <TransactionsTable></TransactionsTable>
              </div>
              {/* <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div> 

                <DataTable data={data} />*/}

            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
