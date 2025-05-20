
import Image from "next/image"

const HistoryIntroduction = () => {
  return (
              <div className="grid gap-6 md:grid-cols-2 md:gap-10 items-center">
            <div className="relative aspect-[4/3] overflow-hidden shadow-lg rounded-lg">
              <Image
                src="/images/og-library-img.jpeg"
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
  )
}

export default HistoryIntroduction