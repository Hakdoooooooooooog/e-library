import { VisionMissionProps } from "@/lib/types";
import VisionMissionItem from "./vision-mission-item";

const VisionMissionItems = ({ data }: { data: VisionMissionProps[] }) => {
  return data.map((data, index) => {
    return (
      <VisionMissionItem
        key={`${data.id}-${data.title}-${index}`}
        data={data}
      />
    );
  });
};

export default VisionMissionItems;
