"use client";

import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
    >
      <div className="relative flex items-center justify-center">
        {/* Large circle - green */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: 1,
            rotate: 360,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute h-32 w-32 rounded-full border-4 border-t-emerald-500 border-r-emerald-500 border-b-transparent border-l-transparent"
        />

        {/* Medium circle - blue */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: 1,
            rotate: -360,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute h-24 w-24 rounded-full border-4 border-t-sky-500 border-r-sky-500 border-b-transparent border-l-transparent"
        />

        {/* Inner circle - light loading pulse */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute h-16 w-16 rounded-full bg-gradient-to-tr from-emerald-200 to-sky-200"
        />

        {/* Inner circle - dark loading pulse */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0.5 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute h-12 w-12 rounded-full bg-gradient-to-tr from-emerald-400 to-sky-500"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
