import Cart from "@/screens/Cart/Cart";
import Home from "@/screens/Home/Home";
import Header from "@/components/Header/Header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTranslation } from "@/hooks/useTranslation";
import colors from "@/config/colors";
import Products from "@/screens/Products/Products";
import WishList from "@/screens/WishList/WishList";
import Setting from "@/screens/Settings/Settings";
import HomeHeader from "@/components/Header/HomeHeader";
import { RootTabParamList } from "@/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TabIcon from "@/components/Tabs/TabIcon";
import { useWindowDimensions } from "react-native";

const Tab = createBottomTabNavigator<RootTabParamList>();

export function MainTabs() {
  const insets = useSafeAreaInsets();
  const { t, isRTL } = useTranslation();
  const primaryColor = (colors && colors.primary) || "#35b6fa";
  const secondaryColor = (colors && colors.secondary) || "#2c2423";
  const { height, width } = useWindowDimensions();

  return (
    <>
      {/* <Header /> */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: secondaryColor,
          tabBarStyle: {
            borderTopWidth: 1,
            paddingTop: 6,
            paddingBottom: insets.bottom > 0 ? insets.bottom : 10,
            display: "flex",
            flexDirection: isRTL ? "row-reverse" : "row",
            // height:60
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
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
            tabBarIcon: ({ color, focused }) => (
              <TabIcon focused={focused}>
                <MaterialIcons name="home" size={26} color={color} />
              </TabIcon>
            ),
          }}
        />
        <Tab.Screen
          name="Products"
          children={() => (
            <>
              <Header title={t("tabs.products")} serachButton />
              <Products />
            </>
          )}
          options={{
            tabBarLabel: t("tabs.products"),
            tabBarIcon: ({ color, focused }) => (
              <TabIcon focused={focused}>
                <MaterialIcons name="store" size={26} color={color} />
              </TabIcon>
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          children={() => (
            <>
              <Header title={t("tabs.cart")} serachButton={false} />
              <Cart />
            </>
          )}
          options={{
            tabBarLabel: t("tabs.cart"),
            tabBarIcon: ({ color, focused }) => (
              <TabIcon focused={focused}>
                <MaterialIcons name="shopping-cart" size={26} color={color} />
              </TabIcon>
            ),
          }}
        />
        <Tab.Screen
          name="Wishlist"
          children={() => (
            <>
              <Header title={t("tabs.wishlist")} serachButton={false} />
              <WishList />
            </>
          )}
          options={{
            tabBarLabel: t("tabs.wishlist"),
            tabBarIcon: ({ color, focused }) => (
              <TabIcon focused={focused}>
                <MaterialIcons name="favorite" size={26} color={color} />
              </TabIcon>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          children={() => (
            <>
              <Header title={t("tabs.settings")} serachButton={false} />
              <Setting />
            </>
          )}
          options={{
            tabBarLabel: t("tabs.settings"),
            tabBarIcon: ({ color, focused }) => (
              <TabIcon focused={focused}>
                <MaterialIcons name="settings" size={26} color={color} />
              </TabIcon>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
