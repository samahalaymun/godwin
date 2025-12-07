import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { ReactQueryProvider } from "./providers/ReactQueryProvider";
import { AppNavigator } from "./navigation/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar hidden={true} translucent={false} />
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
