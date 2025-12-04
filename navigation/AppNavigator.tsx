import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator } from "./AuthNavigator";
import { useAuthStore } from "../store/useAuthStore";
import { MainTabs } from "./MainTabs";

export function AppNavigator() {
  const user = useAuthStore((state) => state.user);
  console.log(user);
  
  return (
    <NavigationContainer>
      {user ? <MainTabs /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
