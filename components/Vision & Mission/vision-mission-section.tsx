import { visionMissionData } from "@/lib/const";
import { TripleLineSeparator } from "@/components/ui/separator";
import VisionMissionItems from "./vision-mission-items";

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
        <VisionMissionItems data={visionMissionData} />
      </div>
    </>
  );
};

export default VisionMissionSection;
