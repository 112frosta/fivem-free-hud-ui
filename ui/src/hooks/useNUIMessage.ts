import { useEffect } from "react";

export function useNUIMessage<T>(name: string, callback: (payload: T) => void) {
  useEffect(() => {
    const listener = (event: MessageEvent) => {
      if (event.data.action === name) {
        callback(event.data.payload);
      }
    };

    window.addEventListener("message", listener);

    return () => window.removeEventListener("message", listener);
  }, [name, callback]);
}
