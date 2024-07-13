import { motion, AnimatePresence, Variants } from "framer-motion";

import SpeedoMeter from "@/components/SpeedoMeter";
import { useState } from "react";
import { useKeyboard } from "@/hooks/useKeyboard";

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function CarHud() {
  const [isVisible, setIsVisible] = useState(false);

  useKeyboard("x", () => {
    setIsVisible((prev) => !prev);
  });

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute flex bottom-5 right-12"
        >
          <SpeedoMeter />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
