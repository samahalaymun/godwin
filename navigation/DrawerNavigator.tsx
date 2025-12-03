import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainTabs } from "./MainTabs";
import { useTranslation } from "@/hooks/useTranslation";

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  const { isRTL } = useTranslation();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: isRTL ? "right" : "left",
      }}
    >
      <Drawer.Screen name="Main" component={MainTabs} />
      <Drawer.Screen name="cart" component={MainTabs} />
    </Drawer.Navigator>
  );
}
