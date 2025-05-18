import { CarouselItemProps, VisionMissionProps } from "./types";

export const CarouselItems: CarouselItemProps[] = [
  {
    id: 1,
    title: "Free Internet & Computer Use",
    description:
      "Access state-of-the-art computer facilities with high-speed internet for research, assignments, and digital learning.",
    image: "/images/services/service-1.jpeg",
    link: "free-internet-computer-use",
  },
  {
    id: 2,
    title: "Study Space",
    description:
      "Enjoy our spacious and quiet reading room designed for focused study and comfortable reading sessions.",
    image: "/images/services/service-2.jpeg",
    link: "study-space",
  },
];

export const visionMissionData: VisionMissionProps[] = [
  {
    id: 1,
    title: "Vision",
    description:
      "The City Public Library of General Trias (CPLGT) dreams of serving the students of the City of General Trias especially those who are enrolled in public schools providing easy access to information with the available reading resources and internet connection.",
  },
  {
    id: 2,
    title: "Mission",
    description: "In achieving this vision the CPLGT commits to:",
    descriptionLists: [
      "Provide quality resources and services through innovative techniques for the Advancement of learning and literacy.",
      "Train and develop all the staff to be equipped with the needed skills and competencies.",
      "Establish linkages and partnership among government and non government agencies",
    ],
  },
];
