import { View, Text } from "react-native";
import React from "react";
import Layout from "../_Layout";
import LanguageSwitcher from "@/components/Shared/LanguageSwitcher";

const Settings = () => {
  return (
    <Layout>
      <View className="bb-primary-500 w-full">
        <LanguageSwitcher />
        <Text>Settings</Text>
      </View>
    </Layout>
  );
};

export default Settings;
