import { TripleLineSeparator } from "@/components/ui/separator";
import HistoryTimeline from "./history-timeline";
import HistoryIntroduction from "./history-introduction";

const HistorySection = () => {
  return (
    <div className="w-full bg-gray-100 py-12 md:py-16 rounded-md">
      <div className="container mx-auto px-4 md:px-6 max-w-full">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex flex-col items-center pb-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
              Our Library&apos;s Rich History
            </h2>
            <TripleLineSeparator />
          </div>
          <p className="max-w-3xl text-muted-foreground">
            From our humble beginnings in 2006, our library has grown into a
            vibrant hub of learning, innovation, and community connection. Join
            us as we look back at our remarkable journey.
          </p>
        </div>

        <div className="grid gap-10 md:gap-16">
          {/* Historical Introduction */}
          <HistoryIntroduction />

          {/* Timeline */}
          <div id="timeline" className="py-8">
            <h3 className="text-2xl  font-semibold text-slate-800 text-center mb-8">
              Key Milestones
            </h3>
            <HistoryTimeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
