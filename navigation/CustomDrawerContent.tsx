import { useTranslation } from "@/hooks/useTranslation";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function CustomDrawerContent(props: any) {
  const { isRTL, t } = useTranslation();

  const items = [
    { label: "المنتجات", screen: "Products", icon: "store" },
    // { label: "الأقسام", screen: "Categories", icon: "category" },
    { label: "حقيبة الشراء", screen: "Cart", icon: "shopping-cart" },
    { label: "المفضلة", screen: "Wishlist", icon: "favorite" },
    { label: "طلباتي", screen: "Orders", icon: "list-alt" },
    // { label: "اللغة", screen: "Language", icon: "language" },
    // { label: "عن التطبيق", screen: "About", icon: "info" },
    // { label: "اتصل بنا", screen: "Contact", icon: "phone" },
    // { label: "الشروط والأحكام", screen: "Terms", icon: "rule" },
  ];

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ paddingVertical: 10 }}>
        {items.map((item, idx) => (
          <DrawerItem
            key={idx}
            label={item.label}
            onPress={() => {
              if (
                ["Home", "Products", "Search", "Wishlist"].includes(item.screen)
              ) {
                props.navigation.navigate("MainStack", {
                  screen: "MainTabs", // Stack screen اللي يحتوي على Tabs
                  params: { screen: item.screen }, // الشاشة داخل التاب
                });
              } else {
                // الشاشات خارج Tabs
                props.navigation.navigate("MainStack", {
                  screen: item.screen,
                });
              }
            }}
            icon={() => (
              <MaterialIcons name={item.icon} size={24} color="#333" />
            )}
            style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
            labelStyle={{ fontSize: 16, color: "#000", marginLeft: 10 }}
          />
        ))}
      </View>
    </DrawerContentScrollView>
  );
}
