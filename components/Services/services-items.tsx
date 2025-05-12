import { CarouselItems } from "@/lib/const";
import { formattedCarouselItems } from "@/lib/utils";
import ServiceSectionItem from "./services-item";

const ServicesItems = () => {
  return (
    <>
      {formattedCarouselItems(CarouselItems).map((carouseItem) => (
        <ServiceSectionItem
          key={`carousel-${carouseItem.id}-${carouseItem.title}`}
          carouseItem={carouseItem}
        />
      ))}
    </>
  );
};

export default ServicesItems;
