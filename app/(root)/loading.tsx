import LoadingScreen from "@/components/ui/loading";
import { AnimatePresence } from "framer-motion";

export default function Loading() {
  return (
    <AnimatePresence mode="wait">
      <LoadingScreen key="loading-main" />
    </AnimatePresence>
  );
}
