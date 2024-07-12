import IconCard from "@/components/IconCard";
import { useState, useCallback } from "react";
import { useWheel } from "@/hooks/useWheel";
import { AnimatePresence, useAnimate, Variants } from "framer-motion";
import {
  FaHeart,
  FaShield,
  FaBurger,
  FaDroplet,
  FaMicrophone,
} from "react-icons/fa6";
import { cn } from "@/utils/cn";

type ItemName = "Health" | "Armor" | "Hunger" | "Thirst" | "Talk";

const items = [
  { name: "Health", value: 50, Icon: FaHeart },
  { name: "Armor", value: 0, Icon: FaShield },
  { name: "Hunger", value: 100, Icon: FaBurger },
  { name: "Thirst", value: 69, Icon: FaDroplet },
  { name: "Talk", value: 33, Icon: FaMicrophone },
];

const variants: Variants = {
  hide: { display: "none", opacity: 0, y: 100 },
  show: { display: "flex", opacity: 1, y: 0 },
};

export default function Hud() {
  const [scope, animate] = useAnimate();
  const [values, setValues] = useState(items);

  const handleValueChange = useCallback((name: ItemName, value: number) => {
    setValues((currentValues) =>
      currentValues.map((item) =>
        item.name === name ? { ...item, value: item.value + value } : item
      )
    );
  }, []);

  useWheel("down", () => animate(scope.current, variants.hide));
  useWheel("up", () => animate(scope.current, variants.show));

  return (
    <div className="absolute -translate-x-1/2 bottom-5 left-1/2">
      <button
        className="bg-red-500"
        onClick={() => handleValueChange("Armor", -10)}
      >
        Debug Button
      </button>
      <div ref={scope} className="flex items-center">
        <AnimatePresence>
          {values.map(({ name, value, Icon }) =>
            name === "Armor" && value <= 0 ? null : (
              <IconCard
                key={name}
                icon={<Icon className="size-5" />}
                progress={value}
                className={cn(
                  "mx-0.5 first-of-type:rounded-l-md last-of-type:rounded-r-md"
                )}
              />
            )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
