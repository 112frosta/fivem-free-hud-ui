import { motion, Variants } from "framer-motion";
import { cn } from "@/utils/cn";

interface IconCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  progress?: number;
}

const variants: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0, transition: { duration: 0.2 } },
};

/*
  Do not pass other props than className, icon and progress to the div element!
*/

export default function IconCard({ icon, progress, ...props }: IconCardProps) {
  return (
    <motion.div
      layout
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn(
        "flex relative mx-0.5 bg-opacity-90 overflow-clip justify-center py-2 text-white bg-black px-[30px]",
        props.className
      )}
    >
      <span className="relative z-50">{icon}</span>
      <div
        style={{ height: `${progress || 0}%` }}
        className={cn(
          "absolute bottom-0 left-0 right-0 z-10 w-full transition-all duration-150 bg-blue-600"
        )}
      />
    </motion.div>
  );
}
