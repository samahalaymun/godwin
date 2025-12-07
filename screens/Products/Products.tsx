import { View, Text, ScrollView } from "react-native";
import React from "react";
import Layout from "../_Layout";

const Products = () => {
  return (
    <Layout>
      <ScrollView className="flex-1 bg-background dark:bg-background-dark">
        <View className="flex-1 justify-center items-center py-8 px-4">
          <Text className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">
            المنتجات
          </Text>
          <Text className="text-secondary-900/50 dark:text-gray-400  text-center">
            قريبا
          </Text>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Products;
