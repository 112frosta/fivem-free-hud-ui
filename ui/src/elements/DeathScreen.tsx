import Kbd from "@/components/Kbd";
import { useState } from "react";
import { formatTime } from "@/utils/formatTime";

export default function DeathScreen() {
  const [time] = useState(300);

  return (
    <div className="flex items-end justify-center gradient-background">
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
    </div>
  );
}
