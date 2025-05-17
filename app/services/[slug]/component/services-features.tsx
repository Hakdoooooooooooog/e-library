"use client";

import { ServiceDetails } from "@/lib/services";
import { motion } from "framer-motion";
import React from "react";

const ServicesFeature = ({
  features,
}: {
  features: ServiceDetails["features"];
}) => {
  return (
    <>
      {features.map((feature, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className="text-gray-600"
        >
          {feature}
        </motion.li>
      ))}
    </>
  );
};

export default ServicesFeature;
