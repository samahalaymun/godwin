import { View, Text } from "react-native";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

const SearchProductNoResult = () => {
  const { t } = useTranslation();

  return (
    <View className="flex-1 justify-center items-center px-6">
      <Text className="text-2xl font-bold text-primary-500 text-center">
        {t("search.noResults") ?? "No products found"}
      </Text>
      <Text className="text-base text-secondary-900/70 mt-2 text-center">
        {t("search.tryDifferent") ?? "Try searching with a different keyword"}
      </Text>
    </View>
  );
};

export default SearchProductNoResult;
