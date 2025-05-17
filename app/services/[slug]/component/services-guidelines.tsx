"use client";

import { motion } from "framer-motion";
import React from "react";

const ServicesGuidelines = ({
  guidelines,
}: {
  guidelines: {
    title: string;
    detail: string;
  }[];
}) => {
  return (
    <>
      {guidelines.map((guideline, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
          className="bg-white p-6 rounded-xl"
        >
          <h3 className="font-bold mb-2">{guideline.title}</h3>
          <p className="text-sm text-gray-600">{guideline.detail}</p>
        </motion.div>
      ))}
    </>
  );
};

export default ServicesGuidelines;
