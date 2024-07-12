import RootLayout from "@/layouts/RootLayout";
import Hud from "@/elements/Hud";
import Manifest from "@/elements/Manifest";

export default function App() {
  return (
    <RootLayout>
      <Manifest />
      <Hud />
    </RootLayout>
  );
}
