"use client";

import { ServiceDetails } from "@/lib/services";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiMonitor, FiWifi, FiBook, FiPrinter } from "react-icons/fi";

import React from "react";
import ServicesFeature from "./services-features";

const iconMap = {
  FiMonitor,
  FiWifi,
  FiBook,
  FiPrinter,
};

const ServicesDescription = ({ service }: { service: ServiceDetails }) => {
  const Icon = iconMap[service.iconName as keyof typeof iconMap];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-8 rounded-2xl shadow-lg"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-4 rounded-xl ${service.iconBgColor}`}>
            <Icon className={`w-8 h-8 ${service.iconColor}`} />
          </div>
          <h2 className="text-2xl font-bold">{service.title}</h2>
        </div>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Features:</h3>
          <ul className="list-disc list-inside space-y-2">
            <ServicesFeature features={service.features} />
          </ul>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative h-[400px] rounded-2xl overflow-hidden"
      >
        <Image
          src={service.detailImage}
          alt={`${service.title} detail`}
          fill
          sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%"
          className="object-cover contrast-75 brightness-75"
        />
      </motion.div>
    </>
  );
};

export default ServicesDescription;
