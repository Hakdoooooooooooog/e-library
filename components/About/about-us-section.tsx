import { TripleLineSeparator } from "../UI/separator";
import AboutUsCard from "./librarian-card";

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

export default AboutUs;
