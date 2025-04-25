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
          Our Library&apos;s Vision & Mission
        </h2>
        <TripleLineSeparator />
      </div>
      <div className="w-full flex flex-wrap justify-evenly">
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

const VisionMissionItem = ({
  item,
}: {
  item: Omit<VisionMissionProps, "id">;
}) => {
  const { title, description, descriptionLists } = item;
  return (
    <Card className="flex[1_1_100%] w-full h-[30rem] md:h-[28rem] lg:h-[25rem] max-w-md md:max-w-xs flex flex-col gap-4">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <CardDescription className="text-md">{description}</CardDescription>
      </CardHeader>
      {descriptionLists &&
        descriptionLists.map((descItem, index) => {
          return (
            <CardContent
              key={`list-${title}-${index}`}
              className="w-full flex flex-col gap-4"
            >
              <ul className="text-sm font-medium">
                <li>{descItem}</li>
              </ul>
            </CardContent>
          );
        })}
    </Card>
  );
};

export default VisionMissionSection;
