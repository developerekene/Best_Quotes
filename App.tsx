import AppEntry from "./src/UI/AppEntry";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppEntry />
    </SafeAreaProvider>
  );
}
