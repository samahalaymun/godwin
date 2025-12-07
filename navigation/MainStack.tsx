import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainTabs } from "./MainTabs";
import Search from "@/screens/Search/Search";
import Category from "@/screens/Category/Category";

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Tab Navigator */}
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      {/*Screens outside the MAinTabs */}
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Category" component={Category} />
  
    </Stack.Navigator>
  );
}
