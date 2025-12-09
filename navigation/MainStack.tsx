import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainTabs } from "./MainTabs";
import Search from "@/screens/Search/Search";
import Category from "@/screens/Category/Category";
import { MainStackParamList } from "@/types";
import { AuthNavigator } from "./AuthNavigator";
import ProductDetails from "@/screens/Products/ProductDetails";

const Stack = createNativeStackNavigator<MainStackParamList>();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Tab Navigator */}
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      {/*Screens outside the MainTabs */}
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />

      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
        initialParams={{ redirectTo: undefined, redirectParams: undefined }}
      />
    </Stack.Navigator>
  );
}
