import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";
import Badge from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import ContactForm from "@/components/contact/ContactForm";
import WhatsAppDeeplinks from "@/components/contact/WhatsAppDeeplinks";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with iTarang Technologies. Whether you're a driver, dealer, NBFC, or investor — we'd love to hear from you.",
  path: "/contact",
});

const contactInfo = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: MapPin, label: "Office", value: siteConfig.address },
  { icon: Clock, label: "Hours", value: siteConfig.hours },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-700/30 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="accent" className="mb-6">Get In Touch</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Let&apos;s Talk
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-brand-200">
            Whether you&apos;re a driver, dealer, NBFC partner, or investor — we&apos;d love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <FadeInOnScroll className="lg:col-span-3">
              <Card>
                <CardContent>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </FadeInOnScroll>

            {/* Sidebar */}
            <FadeInOnScroll delay={0.2} className="lg:col-span-2 space-y-8">
              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Contact Info</h3>
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-gray-900 hover:text-brand-600 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-gray-900">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Deeplinks */}
              <WhatsAppDeeplinks />

              {/* Map placeholder */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
                <MapPin className="mx-auto h-8 w-8 text-brand-400 mb-3" />
                <p className="text-sm font-medium text-gray-700">Unitech Business Zone</p>
                <p className="text-xs text-gray-500">Sector 50, Gurugram, Haryana</p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
