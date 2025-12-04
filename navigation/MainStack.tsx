import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainTabs } from "./MainTabs";
import Cart from "@/screens/Cart/Cart";
import Products from "@/screens/Products/Products";
import WishList from "@/screens/WishList/WishList";
import Orders from "@/screens/Orders/Orders";

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

      {/* شاشات خارج التاب */}
      <Stack.Screen
        name="Cart"
        component={Cart}
      />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Wishlist" component={WishList} />
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
}
