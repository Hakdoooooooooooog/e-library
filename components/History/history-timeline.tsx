"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

const timelineEvents: TimelineEvent[] = [
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
      "The Library of General Trias City continuing providing essential information sources, offering a range of services such as easy computer access, books/materials for obtaining informations, and free wi-fi access to its community.",
  },
];

function TimelineItem({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: false, amount: 0.3 });
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  // Different animation variants based on screen size
  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      y: isSmallScreen ? 50 : 50,
      x: isSmallScreen ? 0 : index % 2 === 0 ? 50 : -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: isSmallScreen ? 0.5 : 0.7,
        ease: "easeOut",
      },
    },
  };

  // Mobile-specific dot animation (small dot that appears before each item)
  const mobileDotVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, delay: 0.1 },
    },
  };

  return (
    <div
      ref={itemRef}
      className={cn(
        "relative grid grid-cols-1 gap-4 md:grid-cols-2 w-full",
        index % 2 === 0 ? "md:text-right" : ""
      )}
    >
      {/* Year marker for desktop */}
      <motion.div
        className={cn(
          "absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-green-100 bg-blue-500 text-white shadow hidden md:flex",
          "md:top-4"
        )}
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      {/* Mobile dot marker (smaller, appears on the left) */}
      {isSmallScreen && (
        <motion.div
          className="absolute -left-2 top-[22px] h-3 w-3 rounded-full bg-blue-500 border-2 border-green-100 shadow"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={mobileDotVariants}
        />
      )}

      {/* Content positioning */}
      <div
        className={cn(
          "md:col-span-1",
          isSmallScreen
            ? "pl-4 ml-1"
            : index % 2 === 0
            ? "md:text-right md:pr-12"
            : "md:col-start-2 md:pl-12"
        )}
      >
        <motion.div
          className="rounded-lg bg-white p-4 shadow-md overflow-hidden"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={contentVariants}
        >
          <span className="inline-block rounded bg-green-100 px-2 py-1 text-sm font-bold text-slate-700">
            {event.year}
          </span>
          <h4 className="mt-2 text-lg font-medium text-slate-800">
            {event.title}
          </h4>
          <p className="mt-1 text-slate-600">{event.description}</p>
        </motion.div>
      </div>

      {/* Empty column for alternating layout (desktop only) */}
      {!isSmallScreen && (
        <div
          className={cn(
            "hidden md:block md:col-span-1",
            index % 2 === 0 ? "md:col-start-2" : ""
          )}
        />
      )}
    </div>
  );
}

export function HistoryTimeline() {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: false, amount: 0.1 });
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <div className="relative w-full overflow-hidden py-8" ref={timelineRef}>
      {/* Center line - different positioning for mobile */}
      <motion.div
        className={cn(
          "absolute top-0 h-full w-0.5 bg-blue-200",
          isSmallScreen ? "left-1 -translate-x-0" : "left-1/2 -translate-x-1/2"
        )}
        initial={{ height: 0 }}
        animate={{ height: isTimelineInView ? "100%" : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <div
        className={cn(
          "w-full",
          isSmallScreen ? "space-y-8 pl-6" : "space-y-12"
        )}
      >
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}
