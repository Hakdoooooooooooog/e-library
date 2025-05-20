import { CarouselItemProps, VisionMissionProps, TimelineEvent } from "./types";

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

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2006",
    title: "Inauguration and Founding Year of General Trias City Library",
    description:
      "Founded by the Local Government Officials of General Trias City. Inaugurated on April 17, 2006.",
  },
  {
    year: "2007",
    title: "Model Municipal Library",
    description:
      'Received the special citation for implementing Best Practices on Environment Management as "Model Municipal Library" last September 17, 2007 at the Provincial Capitol, Trece Martirez City.',
  },
  {
    year: "2009",
    title: "Acquisition of Computer Sets and Internet",
    description:
      "Expanded its resources by acquiring six complete computer sets with internet connection and free wi-fi access.",
  },
  {
    year: "2012",
    title:
      "PRC Board for Librarians and Affiliation with the National Library of the Philippines",
    description:
      "On February 22, 2012, the library passed the evaluation conducted by the PRC Board for Librarians. Followed by affiliation with the National Library of the Philippines on June 13, 2012.",
  },
  {
    year: "2025",
    title: "Ongoing provision of Information and Services",
    description:
      "The Public City Library of General Trias continuing providing essential information sources, offering a range of services such as easy computer access, books/materials for obtaining informations, and free wi-fi access to its community.",
  },
];
