"use client";

import { Battery, ShieldCheck, Truck, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import type { BatterySKU } from "@/data/products";

interface ProductCardProps {
  product: BatterySKU;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dailyEMI = Math.round(product.price / (18 * 30));

  return (
    <Card className="relative overflow-hidden flex flex-col">
      {product.badge && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant={product.badge === "Best Seller" ? "accent" : product.badge === "Premium" ? "success" : "default"}>
            {product.badge}
          </Badge>
        </div>
      )}

      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-brand-600 to-brand-800 flex flex-col items-center justify-center text-white">
        <Battery className="h-12 w-12 mb-2 opacity-80" />
        <span className="text-2xl font-bold">{product.voltage}V {product.capacity}Ah</span>
        <span className="text-sm text-brand-200">{product.energy}</span>
      </div>

      <CardContent className="flex flex-col flex-1 gap-4">
        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>

        {/* Key specs */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-gray-50 p-2">
            <p className="text-xs text-gray-500">Energy</p>
            <p className="text-sm font-semibold text-gray-900">{product.energy}</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-2">
            <p className="text-xs text-gray-500">Weight</p>
            <p className="text-sm font-semibold text-gray-900">{product.weight}</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-2">
            <p className="text-xs text-gray-500">Cycle Life</p>
            <p className="text-sm font-semibold text-gray-900">{product.cycleLife.toLocaleString()}</p>
          </div>
        </div>

        {/* BMS Features */}
        <div className="flex flex-wrap gap-1.5">
          {product.bmsFeatures.slice(0, 4).map((f) => (
            <span key={f} className="inline-flex items-center gap-1 rounded-full bg-accent-green/10 px-2.5 py-0.5 text-xs font-medium text-green-700">
              <ShieldCheck className="h-3 w-3" />
              {f}
            </span>
          ))}
          {product.bmsFeatures.length > 4 && (
            <span className="text-xs text-gray-400">+{product.bmsFeatures.length - 4} more</span>
          )}
        </div>

        {/* Compatible vehicles */}
        <div className="flex flex-wrap gap-1.5">
          {product.compatibleVehicles.map((v) => (
            <span key={v} className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
              <Truck className="h-3 w-3" />
              {v}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="mt-auto border-t border-gray-100 pt-4">
          <div className="flex items-baseline justify-between mb-1">
            <div className="flex items-baseline gap-1">
              <Tag className="h-4 w-4 text-brand-600" />
              <span className="text-2xl font-bold text-gray-900">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
            </div>
            <span className="rounded-full bg-accent-green/10 px-3 py-1 text-sm font-semibold text-green-700">
              ~₹{dailyEMI}/day
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-4">{product.warranty} warranty</p>

          <div className="flex gap-2">
            <Button size="sm" className="flex-1">Get Quote</Button>
            <Button size="sm" variant="outline" className="flex-1">View Specs</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
