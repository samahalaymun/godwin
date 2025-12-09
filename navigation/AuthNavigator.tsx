import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "@/screens/Auth/Login";
import Register from "@/screens/Auth/Register";
import { AuthStackParamList } from "@/types";

const Stack = createStackNavigator<AuthStackParamList>();

export function AuthNavigator({ route }: any) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        initialParams={route.params}
      />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
