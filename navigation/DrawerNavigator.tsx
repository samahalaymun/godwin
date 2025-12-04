import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainTabs } from "./MainTabs";
import { useTranslation } from "@/hooks/useTranslation";
import Cart from "@/screens/Cart/Cart";
import CustomDrawerContent from "./CustomDrawerContent";
import Products from "@/screens/Products/Products";
import WishList from "@/screens/WishList/WishList";
import { MainStack } from "./MainStack";

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  const { isRTL } = useTranslation();
  console.log(isRTL);

  return (
    <Drawer.Navigator
      initialRouteName="MainStack"
      screenOptions={{
        headerShown: false,
        drawerPosition: isRTL ? "right" : "left",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="MainStack" component={MainStack} />
      {/* <Drawer.Screen name="Cart" component={Cart} /> */}
      {/* <Drawer.Screen name="Products" component={Products} /> */}
      {/* <Drawer.Screen name="Categories" component={MainTabs} /> */}
      {/* <Drawer.Screen name="Wishlist" component={WishList} /> */}
      {/* <Drawer.Screen name="Orders" component={MainTabs} />
      <Drawer.Screen name="Language" component={MainTabs} /> */}
      {/* <Drawer.Screen name="About" component={MainTabs} />
      <Drawer.Screen name="Contact" component={MainTabs} />
      <Drawer.Screen name="Terms" component={MainTabs} /> */}
    </Drawer.Navigator>
  );
}
