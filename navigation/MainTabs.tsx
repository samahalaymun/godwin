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
import colors from "@/config/colors";
import Products from "@/screens/Products/Products";
import WishList from "@/screens/WishList/WishList";
import Setting from "@/screens/Settings/Settings";
import HomeHeader from "@/components/Header/HomeHeader";
type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Products: undefined;
  Wishlist: undefined;
  Cart: undefined;
  Settings: undefined;
};

type MainTabsNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList>,
  DrawerNavigationProp<any>
>;

const Tab = createBottomTabNavigator<RootTabParamList>();

export function MainTabs() {
  const navigation = useNavigation<MainTabsNavigationProp>();
  const { t, isRTL } = useTranslation();

  const primaryColor = (colors && colors.primary) || "#35b6fa";
  const secondaryColor = (colors && colors.secondary) || "#6B7280";

  return (
    <>
      {/* <Header /> */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: secondaryColor,
          tabBarStyle: {
            // paddingTop: 4,
            paddingBottom: 6,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: 0,
          },
          tabBarItemStyle: {
            paddingVertical: 2,
            paddingBottom: 4,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          children={() => (
            <>
              <HomeHeader />
              <Home />
            </>
          )}
          options={{
            tabBarLabel: t("tabs.home"),
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Products"
          children={() => (
            <>
              <Header title={t("tabs.products")} />
              <Products />
            </>
          )}
          options={{
            tabBarLabel: t("tabs.products"),
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="store" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          children={() => (
            <>
              <Header title={t("tabs.cart")} />
              <Cart />
            </>
          )}
          options={{
            tabBarLabel: t("tabs.cart"),
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="shopping-cart" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Wishlist"
          children={() => (
            <>
              <Header title={t("tabs.wishlist")} />
              <WishList />
            </>
          )}
          options={{
            tabBarLabel: t("tabs.wishlist"),
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="favorite" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          children={() => (
            <>
              <Header title={t("tabs.settings")} />
              <Setting />
            </>
          )}
          options={{
            tabBarLabel: t("tabs.settings"),
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="settings" size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
