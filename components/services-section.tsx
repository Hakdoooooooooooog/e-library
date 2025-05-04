import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicators,
} from "./ui/carousel";
import { TripleLineSeparator } from "./ui/separator";

type CarouselItemProps = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const CarouselItems: CarouselItemProps[] = [
  {
    id: 1,
    title: "Library Services",
    description:
      "The General Trias City Public Library provides comprehensive services including books, e-books, digital resources, and research assistance. We offer study spaces, computer access, and educational programs, supported by our dedicated staff.",
    image: "/sample.jpg",
  },
  {
    id: 2,
    title: "Library Services",
    description:
      "The General Trias City Public Library provides comprehensive services including books, e-books, digital resources, and research assistance. We offer study spaces, computer access, and educational programs, supported by our dedicated staff.",
    image: "/sample.jpg",
  },
];

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
          {CarouselItems.map((carouseItem) => (
            <ServiceSectionItem
              key={`carousel-${carouseItem.id}-${carouseItem.title}`}
              carouseItem={carouseItem}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselIndicators />
      </Carousel>
    </>
  );
};

const ServiceSectionItem = (carouseItem: {
  carouseItem: CarouselItemProps;
}) => {
  const { title, description, image: imgSrc } = carouseItem.carouseItem;

  return (
    <CarouselItem className="px-4">
      <Card className="relative size-full min-h-[25rem] text-background dark:text-foreground p-0">
        <Image
          src={imgSrc}
          alt="Library-services"
          fill
          sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%"
          className="absolute object-cover rounded-xl contrast-[0.8] brightness-80"
        />
        <CardContent className="relative size-full flex flex-col items-center justify-end gap-4">
          <div className="absolute z-10 inset-0 size-full flex flex-col items-end justify-end px-16 md:px-20 xl:px-24 py-8 gap-4">
            <h2 className="text-xl md:text-2xl font-bold self-start">
              {title}
            </h2>
            <p className="text-md md:text-lg text-muted-foreground self-start line-clamp-1 md:line-clamp-2">
              {description}
            </p>

            <Button
              variant="ghost"
              size={"sm"}
              className="self-start text-sm md:text-lg font-medium cursor-pointer"
            >
              Learn More <FiArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="absolute size-full max-h-1/2  bottom-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl" />
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default ServicesSection;
