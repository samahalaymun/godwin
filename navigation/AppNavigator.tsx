import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator } from "./AuthNavigator";
import { useAuthStore } from "../store/useAuthStore";
import { MainTabs } from "./MainTabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "@/screens/Search/Search";
import { MainStack } from "./MainStack";

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  const user = useAuthStore((state) => state.user);

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
