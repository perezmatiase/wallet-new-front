// app/(protected)/dashboard/page.tsx

import { SectionCards } from "@/components/section-cards"
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
  // ... otros mockPortfolios
]

export default function DashboardPage() {
  return (
    <>
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
        <TransactionsTable />
      </div>
    </>
  )
}
