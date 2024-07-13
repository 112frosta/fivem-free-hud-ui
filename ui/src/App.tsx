import RootLayout from "@/layouts/RootLayout";
import Hud from "@/elements/Hud";
import Manifest from "@/elements/Manifest";
import DeathScreen from "@/elements/DeathScreen";

export default function App() {
  return (
    <RootLayout>
      <Manifest />
      <Hud />
      <DeathScreen />
    </RootLayout>
  );
}
