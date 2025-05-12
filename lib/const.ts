import { CarouselItemProps, VisionMissionProps } from "./types";

export const CarouselItems: CarouselItemProps[] = [
  {
    id: 1,
    title: "Free Internet & Computer Use",
    description:
      "The General Trias City Public Library provides comprehensive services including books, e-books, digital resources, and research assistance. We offer study spaces, computer access, and educational programs, supported by our dedicated staff.",
    image: "/service-1.jpeg",
    link: "",
  },
  {
    id: 2,
    title: "Study Space",
    description:
      "The General Trias City Public Library provides comprehensive services including books, e-books, digital resources, and research assistance. We offer study spaces, computer access, and educational programs, supported by our dedicated staff.",
    image: "/service-2.jpeg",
    link: "",
  },
];

export const visionMissionData: VisionMissionProps[] = [
  {
    id: 1,
    title: "Vision",
    description:
      "The City Public LIbrary of General Trias (CPLGT) dreams of serving the students of the City of General Trias especially those who are enrolled in public schools providing easy access to information with the available reading resources and internet connection.",
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
