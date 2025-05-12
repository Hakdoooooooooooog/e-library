import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CarouselItemProps } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formattedCarouselItems = (CarouselItems: CarouselItemProps[]) => {
  const result = CarouselItems.map((item) => {
    return {
      ...item,
      link: `services/${item.title.toLowerCase().replace(/\s/g, "-")}`,
    };
  });

  return result;
};
