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
    title: "Computer Facilities",
    subtitle: "Modern Computer Workstations",
    description:
      "Access our state-of-the-art computer facilities equipped with high-speed internet and essential software for your research, assignments, and digital learning needs.",
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
    title: "Reading Room",
    subtitle: "Quiet Study Environment",
    description:
      "Enjoy our spacious and quiet reading room, designed for focused study and comfortable reading. Perfect for individual or group study sessions.",
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
        title: "Group Study",
        detail: "Designated areas available",
      },
    ],
  },
  {
    slug: "wifi-access",
    title: "Free WiFi Access",
    subtitle: "High-Speed Internet Connection",
    description:
      "Stay connected with our high-speed WiFi network, perfect for online research, virtual learning, and accessing digital resources.",
    iconName: "FiWifi",
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
    heroImage: "https://placehold.co/1920x1080/gray/white?text=WiFi+Coverage",
    detailImage: "https://placehold.co/800x600/gray/white?text=WiFi+Service",
    features: [
      "High-speed connection",
      "Wide coverage area",
      "Secure network",
      "Easy access",
      "Multiple device support",
    ],
    guidelines: [
      {
        title: "Access Hours",
        detail: "Available during library hours",
      },
      {
        title: "Authentication",
        detail: "No password required",
      },
      {
        title: "Usage Policy",
        detail: "Fair use policy applies",
      },
    ],
  },
  {
    slug: "printing-services",
    title: "Free Printing Services",
    subtitle: "Quality Printing Solutions",
    description:
      "Print your documents, research papers, and assignments at no cost. Our efficient printing system ensures quick and quality outputs.",
    iconName: "FiPrinter",
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    heroImage:
      "https://placehold.co/1920x1080/gray/white?text=Printing+Services",
    detailImage: "https://placehold.co/800x600/gray/white?text=Printing+Area",
    features: [
      "High-quality printing",
      "Black & white and color options",
      "Multiple paper sizes",
      "Quick processing",
      "Self-service stations",
    ],
    guidelines: [
      {
        title: "Daily Limit",
        detail: "20 pages per student per day",
      },
      {
        title: "File Types",
        detail: "Common formats supported",
      },
      {
        title: "Service Hours",
        detail: "During library hours",
      },
    ],
  },
];
