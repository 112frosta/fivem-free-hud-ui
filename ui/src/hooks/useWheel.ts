import { useEffect } from "react";

export const useWheel = (direction: "up" | "down", callback: () => void) => {
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const shouldInvokeCallback =
        (direction === "up" && e.deltaY < 0) ||
        (direction === "down" && e.deltaY > 0);

      if (shouldInvokeCallback) {
        callback();
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [direction, callback]);
};
