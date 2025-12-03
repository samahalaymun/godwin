import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./DrawerNavigator";
import { AuthNavigator } from "./AuthNavigator";
import { useAuthStore } from "../store/useAuthStore";

export function AppNavigator() {
  const user = useAuthStore((state) => state.user);
  console.log(user);
  
  return (
    <NavigationContainer>
      {user ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
