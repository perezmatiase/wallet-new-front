import { SectionCards } from "@/components/section-cards"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Heart } from "lucide-react";
import { AssetHighlights } from "@/components/asset-highlights";
import { UpcomingEvents } from "@/components/upcoming-events";
import { PortfolioTable } from "@/components/portfolioTable"
import { Objectives } from "@/components/objetives";

const objectives2 = [];
const objectives = [
  {
    type: "boolean",
    title: "Revisar portafolio con el asesor",
    achieved: false,
    priority: 2,
  },
  {
    type: "progress",
    title: "Ganar 10 USD este mes",
    current: 1,
    goal: 10,
    priority: 1,
  },
  {
    type: "boolean",
    title: "Transferir dinero antes del día 5",
    achieved: true,
    priority: 3,
  },
];


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


const events = [
  {
    date: new Date("2025-05-10"),
    description: "Balance trimestral de Apple",
    category: "Balance",
  },
  {
    date: new Date("2025-05-12"),
    description: "Acreditación de dividendos de Tesla",
    category: "Dividendo",
  },
  {
    date: new Date("2025-04-30"),
    description: "Aviso de mi asesor: revisar portafolio",
    category: "Aviso",
  },
];
const mockAssets = {
  topVariation: [
    { id: "1", name: "Apple", price: 1500, variation: 2.5 },
    { id: "2", name: "Google", price: 2800, variation: 1.8 },
    { id: "3", name: "Amazon", price: 3200, variation: -0.5 },
  ],
  topPerformance: [
    { id: "1", name: "Tesla", price: 1200, variation: 12 },
    { id: "2", name: "Microsoft", price: 2900, variation: 11 },
    { id: "3", name: "Nvidia", price: 6000, variation: 13 },
  ],
  favorites: [
    { id: "1", name: "Apple", price: 1500, variation: 2 },
    { id: "2", name: "Tesla", price: 1200, variation: -1 },
    { id: "3", name: "Nvidia", price: 6000, variation: 4 },
  ],
};
export default function DashboardPage() {
  return (
    <>
      <SectionCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-6 min-h-[100px]">
        <div className="lg:col-span-2 h-full">
          <div className="h-full">
            <PortfolioTable data={mockPortfolios} />
          </div>
        </div>
        <div className="lg:col-span-1 h-full">
          <div className="h-full">
            <AssetHighlights
              topVariation={mockAssets.topVariation}
              topPerformance={mockAssets.topPerformance}
              favorites={mockAssets.favorites}
            />
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 lg:px-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Próximos eventos</h2>
          <UpcomingEvents events={events} />
        </div>


        <div className="lg:col-span-2">
          <Objectives objectives={objectives} title="Objetivos de Abril" />

        </div>
      </div>

    </>

  )
}
