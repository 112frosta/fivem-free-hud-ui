import IconCard from "@/components/IconCard";
import { Fragment, useEffect, useState } from "react";
import { useWheel } from "@/hooks/useWheel";
import { useAnimate, Variants } from "framer-motion";

import {
  FaHeart,
  FaShield,
  FaBurger,
  FaDroplet,
  FaMicrophone,
} from "react-icons/fa6";

type ItemName = "Health" | "Armor" | "Hunger" | "Thirst" | "Talk";

const items = [
  { name: "Health", value: 50, icon: FaHeart },
  { name: "Armor", value: 0, icon: FaShield },
  { name: "Hunger", value: 100, icon: FaBurger },
  { name: "Thirst", value: 69, icon: FaDroplet },
  { name: "Talk", value: 33, icon: FaMicrophone },
];

const variants: Variants = {
  hide: {
    display: "none",
    opacity: 0,
    y: 100,
  },
  show: {
    display: "flex",
    opacity: 1,
    y: 0,
  },
};

export default function Hud() {
  const [scope, animate] = useAnimate();
  const [values, setValues] = useState(items);

  useWheel("down", () => {
    animate(scope.current, variants.hide);
  });

  useWheel("up", () => {
    animate(scope.current, variants.show);
  });

  useEffect(() => {
    console.log(values);
  }, [values]);

  // @ts-ignore: Required function, unsued variable
  const handleValueChange = (name: ItemName) => {
    const newValues = values.map((item) => {
      if (item.name === name) {
        return { ...item, value: item.value + 20 };
      }
      return item;
    });

    setValues(newValues);
  };

  return (
    <div className="absolute -translate-x-1/2 bottom-5 left-1/2">
      <div ref={scope} className="flex items-center gap-0.5">
        {items.map((item, index) => (
          <Fragment key={index}>
            {item.name === "Armor" && item.value === 0 ? null : (
              <IconCard
                key={item.name}
                icon={<item.icon className="size-5" />}
                progress={values[index].value}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
