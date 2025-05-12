import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicators,
} from "../ui/carousel";
import { TripleLineSeparator } from "../ui/separator";
import ServicesItems from "./services-items";

const ServicesSection = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center justify-center text-foreground pb-4">
          <h1 className="text-4xl text-slate-800 font-bold">Services</h1>
          <TripleLineSeparator />
        </div>
        <p className="max-w-3xl text-muted-foreground text-center">
          The General Trias City Public Library provides comprehensive
          educational support through our vast collection of books, e-books,
          digital resources, and research assistance. We offer study spaces,
          computer access, and educational programs, backed by our dedicated
          staff ready to help you maximize our resources.
        </p>
      </div>
      <Carousel className="w-full self-start">
        <CarouselContent className="ml-0">
          <ServicesItems />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselIndicators />
      </Carousel>
    </>
  );
};

export default ServicesSection;
