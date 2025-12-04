import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import Header from "@/components/Header/Header";
import colors from "@/config/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const { t, isRTL } = useTranslation();
  const navigation = useNavigation<any>();
  const primaryColor = (colors && colors.primary) || "#35b6fa";
  const iconColor = "#fff";

  return (
    <>

      <ScrollView className="flex-1 bg-background dark:bg-gray-900">
        <View className="flex-1 justify-center items-center py-8 px-4">
          <Text
            className="text-2xl font-bold text-black dark:text-white"
            style={{ textAlign: isRTL ? "right" : "left" }}
          >
            {t("cart.title")}
          </Text>
          <Text
            className="text-gray-600 dark:text-gray-400 mt-4 text-center"
            style={{ textAlign: isRTL ? "right" : "center" }}
          >
            {t("cart.empty")}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Cart;
