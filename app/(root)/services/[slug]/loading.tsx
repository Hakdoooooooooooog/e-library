import LoadingScreen from "@/components/UI/loading";
import { AnimatePresence } from "framer-motion";

export default function Loading() {
  return (
    <AnimatePresence mode="wait">
      <LoadingScreen key="services-loading" />
    </AnimatePresence>
  );
}
