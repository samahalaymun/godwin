
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { ReactQueryProvider } from "./providers/ReactQueryProvider";
import { AppNavigator } from "./navigation/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <SafeAreaProvider>
        <GluestackUIProvider mode="light">
          <ReactQueryProvider>
            <AppNavigator />
          </ReactQueryProvider>
        </GluestackUIProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

