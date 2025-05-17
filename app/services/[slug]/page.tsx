import Image from "next/image";
import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import ServicesDescription from "./component/services-description";
import ServicesGuidelines from "./component/services-guidelines";
import { Metadata } from "next";
import BackButton from "./component/back-button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {};
  }

  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
  }

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    title: service.title,
    description: service.subtitle,
    openGraph: {
      title: service.title,
      description: service.subtitle,
      images: [service.heroImage],
    },
  };
}

export default async function Services({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full py-24 px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] mb-16 rounded-2xl overflow-hidden">
        <BackButton />
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">{service.subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Service Description */}
        <ServicesDescription service={service} />
      </div>

      {/* Guidelines Section */}
      <div className="bg-blue-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6">Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServicesGuidelines guidelines={service.guidelines} />
        </div>
      </div>
    </div>
  );
}
