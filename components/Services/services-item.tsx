import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "../UI/button";
import { Card, CardContent } from "../UI/card";
import { CarouselItem } from "../UI/carousel";
import { CarouselItemProps } from "@/lib/types";
import Image from "next/image";

const ServiceSectionItem = (carouseItem: {
  carouseItem: CarouselItemProps;
}) => {
  const { title, description, image: imgSrc, link } = carouseItem.carouseItem;

  return (
    <CarouselItem className="px-4">
      <Card className="relative size-full min-h-[25rem] text-background dark:text-foreground p-0">
        <Image
          src={imgSrc}
          alt="Library-services"
          fill
          sizes="(max-width: 768px) 100%, 100%"
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

            <Link className="self-start" href={link}>
              <Button
                variant="ghost"
                size={"sm"}
                className="text-sm md:text-lg font-medium cursor-pointer"
              >
                Learn More{" "}
                <FiArrowRight className="hidden sm:inline-block ml-2" />
              </Button>
            </Link>
          </div>
          <div className="absolute size-full max-h-1/2  bottom-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl" />
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default ServiceSectionItem;
