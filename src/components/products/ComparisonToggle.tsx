"use client";

import { CheckCircle, XCircle } from "lucide-react";
import { leadAcidComparison } from "@/data/products";

export default function ComparisonToggle() {
  const advantageRows = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // all rows favor lithium

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b-2 border-brand-200">
            {leadAcidComparison.headers.map((header, i) => (
              <th
                key={header}
                className={`px-4 py-3 font-semibold ${
                  i === 1 ? "text-brand-700 bg-brand-50" : i === 2 ? "text-gray-500" : "text-gray-900"
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {leadAcidComparison.rows.map((row, idx) => (
            <tr
              key={row[0]}
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-4 py-3 font-medium text-gray-900">{row[0]}</td>
              <td className="px-4 py-3 bg-brand-50/50">
                <span className="inline-flex items-center gap-1.5 text-brand-700">
                  <CheckCircle className="h-4 w-4 text-accent-green flex-shrink-0" />
                  {row[1]}
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center gap-1.5 text-gray-500">
                  {advantageRows.includes(idx) && (
                    <XCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                  )}
                  {row[2]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
