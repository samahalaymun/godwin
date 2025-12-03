import { Text } from "react-native";
import Cart from "@/screens/Cart/Cart";
import Home from "@/screens/Home/Home";
import Header from "@/components/Header/Header";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import Search from "@/screens/Search/Search";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTranslation } from "@/hooks/useTranslation";

type RootTabParamList = {
  Home: undefined;
  Cart: undefined;
  Search: undefined;
  Products: undefined;
  Wishlist: undefined;
};

type MainTabsNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList>,
  DrawerNavigationProp<any>
>;

const Tab = createBottomTabNavigator<RootTabParamList>();

export function MainTabs() {
  const navigation = useNavigation<MainTabsNavigationProp>();
  const { t, isRTL } = useTranslation();

  return (
    <>
      <Header />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: t("tabs.home"),
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Products"
          component={Cart}
          options={{
            tabBarLabel: t("tabs.products"),
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="store" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: t("tabs.cart"),
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="shopping-cart" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: t("tabs.search"),
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="search" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={Search}
          options={{
            tabBarLabel: t("tabs.wishlist"),
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="favorite" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
