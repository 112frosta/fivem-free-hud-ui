import { cn } from "@/utils/cn";
import { useState } from "react";
import { FaCompass } from "react-icons/fa6";
interface Item {
  name: string;
  value: string;
  Icon?: typeof FaCompass;
}

const items: Item[] = [
  { name: "Heading", value: "NE", Icon: FaCompass },
  { name: "Street", value: "Innocence Blvd" },
];

function Card({ value, Icon }: Item) {
  return (
    <div className="flex relative items-center gap-2 first-of-type:rounded-l-md last-of-type:rounded-r-md bg-opacity-90 overflow-clip justify-center py-2.5 text-white bg-black px-7">
      <span className="relative z-10">
        {Icon && <Icon className="size-4" />}
      </span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}

function SpeedoMeter() {
  //TODO: Implement speed state and update the speed value with Lua

  const [speed] = useState(87);
  const speedStr = speed.toString().padStart(3, "0");
  const digits = speedStr.split("");

  return (
    <div className="flex flex-col gap-2">
      <div className="p-5 space-y-5 text-right">
        <div className="font-medium text-white">Brak Trasy</div>
        <h1>
          {digits.map((digit, index) => (
            <span
              key={index}
              className={cn(
                "font-black text-8xl text-content-100",
                index === 0 && digit === "0" ? "opacity-50" : "opacity-90"
              )}
            >
              {digit}
            </span>
          ))}
          <span className="font-medium text-content-100">km/h</span>
        </h1>
      </div>
      <div className="flex items-center gap-0.5">
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function CarHud() {
  return (
    <div className="absolute flex bottom-5 right-12">
      <SpeedoMeter />
    </div>
  );
}
