import { createMetadata } from "@/lib/metadata";
import Badge from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import GatedForm from "@/components/shared/GatedForm";
import { BarChart3, MapPin, Battery } from "lucide-react";

export const metadata = createMetadata({
  title: "Monthly Fleet Intelligence Reports",
  description:
    "Get detailed monthly insights on fleet performance, battery health, and operational metrics from iTarang's telemetry platform.",
  path: "/fleet-reports",
});

const reportPreviews = [
  {
    icon: BarChart3,
    title: "Fleet Health Summary",
    description:
      "Aggregated battery health scores, charge cycle analytics, average state-of-health trends, and degradation curves across your entire fleet.",
    color: "text-brand-600 bg-brand-50",
  },
  {
    icon: MapPin,
    title: "City Performance",
    description:
      "City-wise breakdown of fleet utilization, average daily distance, charging patterns, and revenue potential by geography.",
    color: "text-accent-pink bg-pink-50",
  },
  {
    icon: Battery,
    title: "Battery Lifecycle Analysis",
    description:
      "End-of-life predictions, warranty claim trends, second-life candidacy scores, and recycling pipeline forecasts.",
    color: "text-accent-green bg-green-50",
  },
];

export default function FleetReportsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-700/30 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="accent" className="mb-6">Intelligence Reports</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Monthly Fleet<br />Intelligence Reports
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-brand-200">
            Detailed monthly insights on fleet performance, battery health, and operational metrics from iTarang&apos;s telemetry platform
          </p>
        </div>
      </section>

      {/* Report Previews */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What's Inside"
            title="Report Highlights"
            subtitle="Each monthly report includes actionable insights across three key areas"
          />
          <div className="grid gap-6 sm:grid-cols-3 mb-16">
            {reportPreviews.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeInOnScroll key={item.title} delay={i * 0.1}>
                  <Card className="h-full">
                    <CardContent className="space-y-4">
                      <div className={`inline-flex rounded-xl p-3 ${item.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </FadeInOnScroll>
              );
            })}
          </div>

          {/* Gated Form */}
          <div className="mx-auto max-w-md">
            <FadeInOnScroll>
              <GatedForm
                title="Get the Latest Report"
                description="Enter your details to receive the latest Monthly Fleet Intelligence Report."
              />
            </FadeInOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
