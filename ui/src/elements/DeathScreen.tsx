import Kbd from "@/components/Kbd";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useNUIMessage } from "@/hooks/useNUIMessage";
import { useKeyboard } from "@/hooks/useKeyboard";
import { formatTime } from "@/utils/formatTime";

const variants: Variants = {
  hide: { opacity: 0 },
  show: { opacity: 1 },
};

export default function DeathScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [time] = useState(300);

  useNUIMessage("death:show", () => {
    setIsVisible(true);
  });

  useNUIMessage("death:hide", () => {
    setIsVisible(false);
  });

  // Dev only
  useKeyboard("d", () => {
    setIsVisible((prev) => !prev);
  });

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          variants={variants}
          initial="hide"
          animate="show"
          exit="hide"
          className="flex items-end justify-center gradient-background"
        >
          <div className="gradient-background animate-pulse" />
          <div className="pb-48 space-y-2 text-center">
            <p className="text-sm font-extrabold tracking-tight text-white uppercase animate-pulse opacity-80">
              WYKRWAWIASZ SIĘ
            </p>
            <h1 className="text-6xl font-extrabold text-white opacity-80">
              {formatTime(time)}
            </h1>
            <p className="font-medium text-white opacity-90">
              Naciśnij <Kbd>G</Kbd> aby wezwać pomoc
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
