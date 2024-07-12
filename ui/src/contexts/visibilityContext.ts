import { createContext } from "react";

export interface VisibleProps {
  hud: boolean;
}

interface ContextProps {
  visible: VisibleProps;
  setVisible: (elements: VisibleProps) => void;
}

export const visibilityContext = createContext<ContextProps>({
  visible: {
    hud: true,
  },
  setVisible: () => {},
});
