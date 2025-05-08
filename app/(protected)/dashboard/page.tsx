import { SectionCards } from "@/components/section-cards"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Heart } from "lucide-react";
import { UpcomingEvents } from "@/components/upcoming-events";
import { PortfolioTable } from "@/components/portfolioTable"
import { Objectives } from "@/components/objetives";

const objectives = [
  {
    type: "boolean",
    title: "Transferir dinero antes del día 5",
    achieved: true,
  },
  {
    type: "progress",
    title: "Ganar 10 USD este mes",
    current: 7.5,
    goal: 10,
  },
  {
    type: "boolean",
    title: "Revisar portafolio con el asesor",
    achieved: false,
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-6">
        <div className="lg:col-span-2">
          <PortfolioTable data={mockPortfolios} />
        </div>
        <div className="lg:col-span-1">
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-4 max-w-md mx-auto">
            <Tabs defaultValue="topVariation" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="topVariation">Variación</TabsTrigger>
                <TabsTrigger value="topPerformance">Rendimientos</TabsTrigger>
                <TabsTrigger value="favorites" className="flex items-center justify-center gap-1">
                  <Heart className="w-4 h-4" /> Favoritos
                </TabsTrigger>
              </TabsList>

              <TabsContent value="topVariation">
                <div className="bg-muted rounded-xl p-4 space-y-2">
                  {mockAssets.topVariation.map((asset) => (
                    <div key={asset.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                      <span className="font-medium">{asset.name}</span>
                      <div className="text-right">
                        <p className="text-sm">${asset.price.toLocaleString()}</p>
                        <p className={`text-xs font-medium ${asset.variation >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {asset.variation}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="topPerformance">
                <div className="bg-muted rounded-xl p-4 space-y-2">
                  {mockAssets.topPerformance.map((asset) => (
                    <div key={asset.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                      <span className="font-medium">{asset.name}</span>
                      <div className="text-right">
                        <p className="text-sm">${asset.price.toLocaleString()}</p>
                        <p className={`text-xs font-medium ${asset.variation >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {asset.variation}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="favorites">
                <div className="bg-muted rounded-xl p-4 space-y-2">
                  {mockAssets.favorites.map((asset) => (
                    <div key={asset.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                      <span className="font-medium">{asset.name}</span>
                      <div className="text-right">
                        <p className="text-sm">${asset.price.toLocaleString()}</p>
                        <p className={`text-xs font-medium ${asset.variation >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {asset.variation}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
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
