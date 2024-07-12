import { useState } from "react";
import { useKeyboard } from "@/hooks/useKeyboard";
import { FaEarthAmericas } from "react-icons/fa6";
import { motion, useAnimate, Variants } from "framer-motion";

const variants: Variants = {
  hide: {
    display: "none",
    opacity: 0,
    y: -100,
  },
  show: {
    display: "flex",
    opacity: 1,
    y: 0,
  },
};

export default function Manfiest() {
  const [scope, animate] = useAnimate();
  const [isOpened, setIsOpened] = useState(false);
  const [citizens] = useState(23);

  useKeyboard("z", () => {
    if (isOpened) animate(scope.current, variants.hide);
    else animate(scope.current, variants.show);
    setIsOpened((prev) => !prev);
  });

  return (
    <div className="absolute -translate-x-1/2 top-5 left-1/2">
      <motion.div
        ref={scope}
        variants={variants}
        initial="hide"
        className="flex items-center justify-between gap-12 px-5 py-3.5 bg-black rounded-md bg-opacity-90 text-content"
      >
        <div className="flex items-center gap-2.5 font-semibold">
          <FaEarthAmericas className="size-4" />
          <span className="text-sm">Obywateli: {citizens}</span>
        </div>
        <a href="#" className="text-xs text-content-200">
          uklife.pl
        </a>
      </motion.div>
    </div>
  );
}
