import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <section id="home" className="section-container p-0">
        <div className="hero-image-container">
          <Image
            priority
            className="hero-image"
            fill
            src="/hero-img.jpeg"
            alt="Hero-image"
          />
        </div>
        <span className="hero-image-overlay"></span>
        <div className="hero-content-container">
          <div className="flex flex-col items-center justify-center size-full gap-12">
            <div className="flex w-full items-center gap-4">
              <div className="relative size-25 flex-shrink-0">
                <Image
                  src="/logo-hero.png"
                  alt="Public-library-logo"
                  fill
                  sizes="(100vw) 6rem, (max-width: 768px) 3rem, (max-width: 1200px) 4.5rem, 6rem"
                  priority
                />
              </div>
              <h1 className="flex-[1_1_auto] text-2xl md:text-4xl font-extrabold">
                General Trias City Public Library
              </h1>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <h2 className="text-xl md:text-2xl font-bold">
                Building a Brighter Future:
              </h2>
              <p className="text-lg md:text-2xl">
                General Trias e-Library Empowers Students with Free Services.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-start flex[1_1_100%] gap-4 place-self-end pb-8">
            <h2 className="text-lg md:text-2xl font-bold">Office Hours:</h2>
            <h3 className="text-md  font-medium">
              Monday: <span className="font-bold">7 am - 4 pm</span>
            </h3>
            <h3 className="text-md font-medium">
              Tuesday-Friday: <span className="font-bold">8 am - 5 pm</span>
            </h3>
          </div>
        </div>
      </section>

      <section
        id="library-services"
        className="section-container justify-start"
      >
        <Carousel className="w-full self-start">
          <CarouselContent className="ml-0">
            <CarouselItem className="px-4">
              <Card className="relative size-full min-h-[25rem] text-background dark:text-foreground">
                <Image
                  src="/sample.jpg"
                  alt="Library-services"
                  fill
                  sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%"
                  className="absolute object-cover rounded-xl contrast-[0.8] brightness-50"
                />
                <CardContent className="relative size-full flex flex-col items-center justify-end gap-4 px-28">
                  <h2 className="text-2xl font-bold self-start">
                    Library Services
                  </h2>
                  <p className="text-lg font-md self-start line-clamp-2">
                    The General Trias City Public Library offers a wide range of
                    services to support the educational and informational needs
                    of the community. Our services include access to a vast
                    collection of books, e-books, and digital resources, as well
                    as research assistance. We also provide study spaces,
                    computer access, and educational programs for all ages. Our
                    friendly and knowledgeable staff are here to help you find
                    the information you need and make the most of our resources.
                  </p>
                  <Button
                    variant="ghost"
                    size={"sm"}
                    className="self-start text-sm md:text-lg font-semibold cursor-pointer"
                  >
                    Learn More <FiArrowRight className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselIndicators />
        </Carousel>
      </section>
    </>
  );
}
