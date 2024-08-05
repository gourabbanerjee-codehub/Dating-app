import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigationStack from "./src/route/MainNavigationStack";

export default function App() {
  return (
    <SafeAreaProvider>
      <MainNavigationStack />
    </SafeAreaProvider>
  );
}
