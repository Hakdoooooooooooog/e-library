import Image from "next/image";
import { TripleLineSeparator } from "@/components/UI/separator";
import { HistoryTimeline } from "./history-timeline";

export function HistorySection() {
  return (
    <div className="w-full bg-gray-100 py-12 md:py-16 rounded-md">
      <div className="container mx-auto px-4 md:px-6 max-w-full">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex flex-col items-center pb-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
              Our Library&apos;s Rich History
            </h2>
            <TripleLineSeparator />
          </div>
          <p className="max-w-3xl text-muted-foreground">
            From our humble beginnings in 2006, our library has grown into a
            vibrant hub of learning, innovation, and community connection. Join
            us as we look back at our remarkable journey.
          </p>
        </div>

        <div className="grid gap-10 md:gap-16">
          {/* Historical Introduction */}
          <div className="grid gap-6 md:grid-cols-2 md:gap-10 items-center">
            <div className="relative aspect-[4/3] overflow-hidden shadow-lg">
              <Image
                src="/og-library-img.jpeg"
                alt="Original library building from 2006"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <p className="text-sm font-medium">
                  The Library building, circa 2006
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-800">
                Our Foundation
              </h3>
              <p className="text-slate-700">
                Established in 2006, our library started with a modest
                collection of 1,000 books in a small facility within General
                Trias City, driven by the vision of local government leaders.
              </p>
              <p className="text-slate-700">
                Since then, we&apos;ve grown to become a vital educational hub,
                fostering learning through various programs, digital resources,
                and community initiatives that continue to enrich our
                city&apos;s cultural landscape.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div id="timeline" className="py-8">
            <h3 className="text-2xl  font-semibold text-slate-800 text-center mb-8">
              Key Milestones
            </h3>
            <HistoryTimeline />
          </div>

          {/* Expansion and Renovation
          <div className="grid gap-6 md:grid-cols-2 md:gap-10 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-slate-800">
                Modern Expansion
              </h3>
              <p className="text-slate-700">
                In 2005, our library underwent its most significant renovation,
                expanding to include a dedicated children&apos;s wing, digital
                media lab, and community meeting spaces. The project carefully
                preserved the historical elements of our building while
                incorporating modern amenities and technology.
              </p>
              <p className="text-slate-700">
                Today, our library houses over 500,000 physical items and
                provides access to millions more through our digital collections
                and interlibrary loan partnerships.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg order-1 md:order-2">
              <Image
                src="https://placehold.co/800x600/gray/white?text=Modern+Library+Building"
                alt="Modern library building after 2005 renovation"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <p className="text-sm font-medium">
                  Our library after the 2005 renovation and expansion
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
