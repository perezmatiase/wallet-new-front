// components/AssetsCarousel.tsx
"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Asset {
  id: string;
  name: string;
  price: number;
  variation: number;
}

interface AssetsCarouselProps {
  assetsByTab: {
    topVariation: Asset[];
    topPerformance: Asset[];
    favorites: Asset[];
  };
}

export default function AssetsCarousel({ assetsByTab }: AssetsCarouselProps) {
  const renderCards = (assets: Asset[]) => (
    <div className="flex space-x-4 overflow-x-auto py-2">
      {assets.map((asset) => (
        <Card key={asset.id} className="min-w-[200px] max-w-[200px] flex-shrink-0">
          <CardContent className="flex flex-col justify-center items-start h-32 p-4">
            <div className="text-sm font-medium">{asset.name}</div>
            <div className="text-lg font-bold">${asset.price.toFixed(2)}</div>
            <div
              className={`text-sm ${
                asset.variation >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {asset.variation >= 0 ? "+" : ""}
              {asset.variation.toFixed(2)}%
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-4">
      <Tabs defaultValue="variation" className="w-full">
        <TabsList className="flex justify-between w-full">
          <TabsTrigger value="variation">Mayor variación</TabsTrigger>
          <TabsTrigger value="performance">Mayores rendimientos</TabsTrigger>
          <TabsTrigger value="favorites" className="flex items-center gap-1">
            <Heart className="w-4 h-4" /> Favoritos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="variation">{renderCards(assetsByTab.topVariation)}</TabsContent>
        <TabsContent value="performance">{renderCards(assetsByTab.topPerformance)}</TabsContent>
        <TabsContent value="favorites">{renderCards(assetsByTab.favorites)}</TabsContent>
      </Tabs>
    </div>
  );
}
