export type ServiceDetails = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: "FiMonitor" | "FiWifi" | "FiBook" | "FiPrinter";
  iconBgColor: string;
  iconColor: string;
  features: string[];
  heroImage: string;
  detailImage: string;
  guidelines: {
    title: string;
    detail: string;
  }[];
};

export const services: ServiceDetails[] = [
  {
    slug: "free-internet-%26-computer-use",
    title: "Free Internet & Computer Use",
    subtitle: "Computer Facilities",
    description:
      "Access our state-of-the-art computer facilities equipped with high-speed internet and the latest software. Perfect for research, assignments, and online learning.",
    iconName: "FiMonitor",
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    heroImage: "/images/services/service-1.jpeg",
    detailImage:
      "https://placehold.co/800x600/gray/white?text=Computer+Facilities",
    features: [
      "High-performance computers",
      "Latest software applications",
      "High-speed internet access",
      "Dedicated workstations",
      "Technical support available",
      "Printing and scanning services",
      "Free WiFi access",
      "Accessible for all students",
    ],
    guidelines: [
      {
        title: "Requirements",
        detail: "Valid student ID required",
      },
      {
        title: "Printing Policy",
        detail:
          "Free printing available up to 15 pages per day; Additional 15 pages if you provide your own paper",
      },
      {
        title: "Usage Policy",
        detail: "Educational use only",
      },
      {
        title: "Food and Drinks",
        detail: "No food or drinks allowed",
      },
      {
        title: "Technical Support",
        detail: "Available during library hours",
      },
    ],
  },
  {
    slug: "study-space",
    title: "Study Space",
    subtitle: "Quiet Study Environment for Students",
    description:
      "Our library offers a variety of study spaces, including individual carrels and group study areas, designed to provide a conducive environment for learning and collaboration.",
    iconName: "FiBook",
    iconBgColor: "bg-amber-100",
    iconColor: "text-amber-600",
    heroImage: "/images/services/service-2.jpeg",
    detailImage: "/images/services/service-2-highlight.jpg",
    features: [
      "Individual study carrels",
      "Group study areas",
      "Natural lighting",
      "Comfortable seating",
      "Climate controlled environment",
      "Power outlets available",
      "bookshelves and resources",
    ],
    guidelines: [
      {
        title: "Noise Level",
        detail: "Please maintain silence",
      },
      {
        title: "Food Policy",
        detail: "No food or drinks allowed",
      },
      {
        title: "Personal Items",
        detail: "Keep personal items with you",
      },
      {
        title: "Group Study",
        detail: "Designated areas available",
      },
    ],
  },
];
