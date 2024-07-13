import { motion, Variants } from "framer-motion";
import { cn } from "@/utils/cn";

interface IconCardProps {
  icon: React.ReactNode;
  progress?: number;
  className?: string;
}

const variants: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0, transition: { duration: 0.2 } },
};

export default function IconCard({ icon, progress, className }: IconCardProps) {
  return (
    <motion.div
      layout
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn(
        "flex relative bg-opacity-90 overflow-clip justify-center py-2.5 text-white bg-black px-8",
        className
      )}
    >
      <span className="relative z-50">{icon}</span>
      <div
        style={{ height: `${progress}%` }}
        className={cn(
          "absolute bottom-0 left-0 right-0 z-20 w-full transition-all duration-150 bg-blue-600"
        )}
      />
    </motion.div>
  );
}
