import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import HomeBanner from "@/components/Home/HomeBanner";
import Layout from "../_Layout";
import ShopByCategory from "@/components/Home/ShopByCategory";

const Home = () => {
  const { t, isRTL } = useTranslation();

  return (
    <ScrollView className="flex-1 bg-background dark:bg-background-dark" >
      <HomeBanner
        imageUrl="https://images.unsplash.com/photo-1620331317984-53581633aff6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        onPress={() => {
          console.log("Banner pressed");
        }}
      />
      <View className="px-4">
        <ShopByCategory />
      </View>
    </ScrollView>
  );
};

export default Home;
