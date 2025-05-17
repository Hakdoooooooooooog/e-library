"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

const BackButton = () => {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-blue-600/90 backdrop-blur-sm rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-200 absolute top-6 left-6 z-20 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 cursor-pointer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      exit={{ opacity: 0, x: -20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiArrowLeft className="w-5 h-5" />
      Back to Services
    </motion.button>
  );
};

export default BackButton;
