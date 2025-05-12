import { VisionMissionProps } from "@/lib/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../UI/card";

const VisionMissionItem = ({ data }: { data: VisionMissionProps }) => {
  const { title, description, descriptionLists } = data;
  return (
    <Card
      className={`flex[1_1_100%] w-full h-fit sm:h-[24rem] max-w-md flex flex-col shadow-md border border-slate-300 rounded-lg p-4 ${
        data.id % 2 === 0
          ? "bg-gradient-to-tr from-blue-400 to-blue-600"
          : "bg-gradient-to-tr from-green-400 to-green-600"
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

export default VisionMissionItem;
