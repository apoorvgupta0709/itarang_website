"use client";

import { useState } from "react";
import { Calculator, TrendingDown, IndianRupee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

export default function EMICalculator() {
  const [price, setPrice] = useState(49000);
  const [rate, setRate] = useState(17.5);
  const [tenure, setTenure] = useState(18);

  // Standard EMI formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = rate / 100 / 12;
  const n = tenure;
  const emi =
    monthlyRate === 0
      ? price / n
      : (price * monthlyRate * Math.pow(1 + monthlyRate, n)) /
        (Math.pow(1 + monthlyRate, n) - 1);
  const totalPayable = emi * n;
  const totalInterest = totalPayable - price;
  const dailyEMI = emi / 30;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Calculator */}
      <Card>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Calculator className="h-5 w-5 text-brand-600" />
            <h3 className="text-lg font-semibold text-gray-900">EMI Calculator</h3>
          </div>

          {/* Battery Price */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <label className="font-medium text-gray-700">Battery Price</label>
              <span className="font-semibold text-brand-700">₹{price.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="range"
              min={30000}
              max={80000}
              step={1000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-brand-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>₹30,000</span>
              <span>₹80,000</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <label className="font-medium text-gray-700">Interest Rate</label>
              <span className="font-semibold text-brand-700">{rate}%</span>
            </div>
            <input
              type="range"
              min={12}
              max={30}
              step={0.5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-brand-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>12%</span>
              <span>30%</span>
            </div>
          </div>

          {/* Tenure */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <label className="font-medium text-gray-700">Tenure (months)</label>
              <span className="font-semibold text-brand-700">{tenure} months</span>
            </div>
            <input
              type="range"
              min={6}
              max={24}
              step={1}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full accent-brand-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>6 mo</span>
              <span>24 mo</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
            <div className="rounded-xl bg-brand-50 p-4 text-center">
              <p className="text-xs text-brand-600 font-medium mb-1">Monthly EMI</p>
              <p className="text-2xl font-bold text-brand-800">₹{Math.round(emi).toLocaleString("en-IN")}</p>
            </div>
            <div className="rounded-xl bg-accent-green/10 p-4 text-center">
              <p className="text-xs text-green-600 font-medium mb-1">Daily EMI</p>
              <p className="text-2xl font-bold text-green-700">₹{Math.round(dailyEMI)}</p>
              <p className="text-xs text-green-600">per day</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-xs text-gray-500 font-medium mb-1">Total Payable</p>
              <p className="text-lg font-semibold text-gray-900">₹{Math.round(totalPayable).toLocaleString("en-IN")}</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-xs text-gray-500 font-medium mb-1">Total Interest</p>
              <p className="text-lg font-semibold text-gray-900">₹{Math.round(totalInterest).toLocaleString("en-IN")}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* TCO Comparison */}
      <Card>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="h-5 w-5 text-accent-green" />
            <h3 className="text-lg font-semibold text-gray-900">3-Year TCO Comparison</h3>
          </div>

          {/* iTarang Lithium */}
          <div className="rounded-xl border-2 border-accent-green/30 bg-accent-green/5 p-5">
            <div className="flex items-center gap-2 mb-3">
              <IndianRupee className="h-4 w-4 text-green-700" />
              <h4 className="font-semibold text-green-800">iTarang Lithium + Financing</h4>
            </div>
            <ul className="space-y-2 text-sm text-green-700">
              <li>One battery: ₹{price.toLocaleString("en-IN")} with EMI</li>
              <li>Lasts 3-5 years (2,000+ cycles)</li>
              <li>Total cost: ₹{Math.round(totalPayable).toLocaleString("en-IN")}</li>
              <li>Daily cost: ~₹{Math.round(dailyEMI)}/day for {tenure} months only</li>
              <li>Built-in BMS + IoT telemetry</li>
            </ul>
            <div className="mt-4 rounded-lg bg-accent-green/20 p-3 text-center">
              <span className="text-2xl font-bold text-green-800">₹{Math.round(totalPayable).toLocaleString("en-IN")}</span>
              <p className="text-xs text-green-600 mt-1">Total 3-year cost</p>
            </div>
          </div>

          {/* Lead-Acid */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <IndianRupee className="h-4 w-4 text-gray-500" />
              <h4 className="font-semibold text-gray-700">Lead-Acid Batteries</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>₹15,000-18,000 per battery</li>
              <li>Replacement every 8-12 months</li>
              <li>3-4 replacements in 3 years</li>
              <li>No BMS, no data, no warranty after 6 months</li>
              <li>Toxic lead, disposal issues</li>
            </ul>
            <div className="mt-4 rounded-lg bg-gray-200 p-3 text-center">
              <span className="text-2xl font-bold text-gray-700">₹45,000 – 72,000</span>
              <p className="text-xs text-gray-500 mt-1">Total 3-year cost</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
