"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"

interface Asset {
  id: string
  name: string
  price: number
  variation: number
}

interface AssetHighlightsProps {
  topVariation: Asset[]
  topPerformance: Asset[]
  favorites: Asset[]
}

export function AssetHighlights({ topVariation, topPerformance, favorites }: AssetHighlightsProps) {
  const renderAssetList = (assets: Asset[]) => (
    <div className="bg-muted rounded-xl p-4 space-y-2">
      {assets.map((asset) => (
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
  )

  return (
    <Card className="max-w-md mx-auto h-full flex flex-col">
      <CardHeader>
        <CardTitle>Destacados de tus portafolios</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="topVariation" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="topVariation">Variación</TabsTrigger>
            <TabsTrigger value="topPerformance">Rendimientos</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center justify-center gap-1">
              <Heart className="w-4 h-4" /> Favoritos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="topVariation">{renderAssetList(topVariation)}</TabsContent>
          <TabsContent value="topPerformance">{renderAssetList(topPerformance)}</TabsContent>
          <TabsContent value="favorites">{renderAssetList(favorites)}</TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
