export type CarouselItemProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

export type VisionMissionProps = {
  id: number;
  title: string;
  description: string;
  descriptionLists?: Array<string> | undefined;
};

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};
