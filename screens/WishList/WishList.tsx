import { View, Text, ScrollView } from "react-native";
import React from "react";

const WishList = () => {
  return (
    <ScrollView className="flex-1 bg-background dark:bg-background-dark">
      <View className="flex-1 justify-center items-center py-8 px-4">
        <Text className="text-2xl font-bold text-secondary-500 dark:text-secondary-100">
          المفضلة
        </Text>
        <Text className="text-gray-600 dark:text-gray-400  text-center">
          قريبا
        </Text>
      </View>
    </ScrollView>
  );
};

export default WishList;
