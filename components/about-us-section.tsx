import Image from "next/image";
import { TripleLineSeparator } from "./ui/separator";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-foreground pb-4">
        <h1 className="text-4xl text-slate-800 font-bold text-center">
          Meet Our Librarians
        </h1>
        <TripleLineSeparator />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 md:gap-16 w-full">
        {Array.from({ length: 6 }, (_, index) => (
          <AboutUsCard
            key={`about-us-card-${index}`}
            librarianName="John Doe"
            designation="Librarian I"
          />
        ))}
      </div>
    </>
  );
};

const AboutUsCard = ({
  librarianName,
  designation,
}: {
  librarianName: string;
  designation: string;
}) => {
  return (
    <div className="relative size-60 md:size-72 overflow-hidden  bg-white transition-transform duration-300 ease-in-out hover:scale-105">
      <AboutUsCardContent>
        <div className=" flex flex-col items-center text-center overflow-hidden">
          <AboutUsCardImage />
        </div>
        <div className="w-full flex flex-col items-center text-center text-white mt-4">
          <h2 className="text-lg font-bold">{librarianName}</h2>
          <p className="text-sm text-muted-foreground">{designation}</p>
        </div>
      </AboutUsCardContent>
    </div>
  );
};

const AboutUsCardContent = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="absolute bottom-0 left-0 flex items-center justify-center rounded-full w-full h-fit p-4 bg-gradient-to-tr from-green-300 to-green-800">
      {children}
    </div>
  );
};

const AboutUsCardImage = () => {
  return (
    <>
      <div className="absolute size-36 rounded-full -top-12 left-1/2 -translate-1/2">
        <Image
          src="https://placehold.co/800x600/gray/white?text=placeholder+librarian+image"
          alt="Placeholder librarian image"
          className="rounded-2xl object-cover"
          fill
          sizes="(max-width: 768px) 9rem,  9rem"
        />
      </div>
      {/* Reflection */}
      <div className="absolute size-36 -top-12 left-1/2 -translate-1/2 mt-36">
        <Image
          src="https://placehold.co/800x600/gray/white?text=placeholder+librarian+image"
          alt="Reflection"
          className="rounded-2xl object-cover opacity-20 rotate-180 scale-y-[-1] mt-4"
          fill
          sizes="(max-width: 768px) 9rem,  9rem"
        />
      </div>
    </>
  );
};

export default AboutUs;
