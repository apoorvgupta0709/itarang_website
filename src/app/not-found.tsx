import Link from "next/link";
import { Battery, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <Battery className="h-16 w-16 text-brand-300 mb-6" />
      <h1 className="text-6xl font-bold text-brand-900 mb-2">404</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-gray-500 max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-3">
        <Button href="/" size="md">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
        <Button href="/contact" size="md" variant="outline">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
