import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

const Home = () => {
  const { t, isRTL } = useTranslation();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <View className="flex-1 justify-center items-center py-8 px-4">
        <Text
          className="text-2xl font-bold text-black dark:text-white"
          style={{ textAlign: isRTL ? "right" : "left" }}
        >
          {t("home.title")}
        </Text>
        <Text
          className="text-gray-600 dark:text-gray-400 mt-4 text-center"
          style={{ textAlign: isRTL ? "right" : "center" }}
        >
          {t("home.description")}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;
