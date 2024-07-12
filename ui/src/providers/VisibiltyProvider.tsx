import { visibilityContext, VisibleProps } from "@/contexts/visibilityContext";
import { useState } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const initialState: VisibleProps = {
  hud: true,
};

export default function VisibilityProvider({ children }: ProviderProps) {
  const [visible, setVisible] = useState(initialState);

  return (
    <visibilityContext.Provider value={{ visible, setVisible }}>
      {children}
    </visibilityContext.Provider>
  );
}
