import { View, TouchableOpacity, useColorScheme, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTranslation } from "@/hooks/useTranslation";

const Header: React.FC = () => {
  const navigation = useNavigation<any>();
  const colorScheme = useColorScheme();
  const iconColor = colorScheme === "dark" ? "#fff" : "#000";
  const { t, isRTL } = useTranslation();

  return (
    <View
      className="bg-white dark:bg-gray-900 flex flex-row justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-800"
      style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
    >
      {/* Left - Hamburger Menu */}
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        className="p-2 "
      >
        <MaterialIcons name="menu" size={28} color={iconColor} />
      </TouchableOpacity>

      {/* Center - Title */}
      <View>
        <Text className="text-2xl font-bold text-black dark:text-white">
          {t("header.title")}
        </Text>
      </View>

      {/* Right - Cart Icon */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Main" as never, {
            screen: "Cart",
          });
        }}
        className="p-2"
      >
        <MaterialIcons name="shopping-cart" size={28} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
