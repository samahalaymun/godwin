import { View, Text } from "react-native";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

const SearchProductEmptyState = () => {
  const { t } = useTranslation();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold text-primary-500 mt-4">
        {t("search.title")}
      </Text>
      <Text className="text-lg text-secondary-900/70 mt-2 text-center px-6">
        {t("search.placeholder")}
      </Text>
    </View>
  );
};

export default SearchProductEmptyState;
