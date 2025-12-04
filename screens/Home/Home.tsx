import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

const Home = () => {
  const { t, isRTL } = useTranslation();

  return (
    <ScrollView className="flex-1 bg-background dark:bg-background-dark">
      <View className="flex-1 justify-center items-center py-8 px-4">
        <Text
          className="text-2xl font-bold text-secondary-500 dark:text-secondary-100"
        >
          {t("home.title")}
        </Text>
        <Text
          className="text-gray-600 dark:text-gray-400  text-center"
         
        >
          {t("home.description")}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;
