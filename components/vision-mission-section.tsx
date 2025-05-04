import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { TripleLineSeparator } from "./ui/separator";

type VisionMissionProps = {
  id: number;
  title: string;
  description: string;
  descriptionLists?: Array<string> | undefined;
};

const items: VisionMissionProps[] = [
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

const VisionMissionSection = () => {
  return (
    <>
      <div className=" flex flex-col items-center pb-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
          Vision & Mission
        </h2>
        <TripleLineSeparator />
      </div>
      <div className="w-full flex flex-wrap justify-around gap-y-8">
        <VisionMissionItems items={items} />
      </div>
    </>
  );
};

const VisionMissionItems = ({ items }: { items: VisionMissionProps[] }) => {
  return items.map((item, index) => {
    return (
      <VisionMissionItem
        key={`${item.id}-${item.title}-${index}`}
        item={item}
      />
    );
  });
};

const VisionMissionItem = ({ item }: { item: VisionMissionProps }) => {
  const { title, description, descriptionLists } = item;
  return (
    <Card
      className={`flex[1_1_100%] w-full h-fit sm:h-[24rem] max-w-md flex flex-col shadow-md border border-slate-300 rounded-lg p-4 ${
        item.id % 2 === 0
          ? "bg-gradient-to-tr from-blue-300 to-blue-500"
          : "bg-gradient-to-tr from-green-300 to-green-500"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-slate-700">
          {title}
        </CardTitle>
        <CardDescription className="text-md text-muted">
          {description}
        </CardDescription>
      </CardHeader>
      {descriptionLists &&
        descriptionLists.map((descItem, index) => {
          return (
            <CardContent
              key={`list-${title}-${index}`}
              className="w-full flex flex-col gap-4"
            >
              <ul className="text-justify list-disc list-inside">
                <li>
                  <span className="text-sm font-normal">{descItem}</span>
                </li>
              </ul>
            </CardContent>
          );
        })}
    </Card>
  );
};

export default VisionMissionSection;
