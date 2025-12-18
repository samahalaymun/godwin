import { View, Text } from "react-native";
import React from "react";
import Layout from "../_Layout";
import LanguageSwitcher from "@/components/Shared/LanguageSwitcher";
import { useRequireAuth } from "@/hooks/useProtected";
import { useUnifiedNavigation } from "@/hooks/useNavigation";

const Settings = () => {
  const requireAuth = useRequireAuth();
  const navigation = useUnifiedNavigation();

  const handleAddToCart = () => {
    const allowed = requireAuth({ redirectTo: "Cart" });
    if (!allowed) return;
    navigation.navigate("Cart");
  };

  const goToProductDetails = () => {
    navigation.navigate("ProductDetails", { id: 1 });
  };
  return (
    <Layout>
      <View className="bb-primary-500 w-full">
        <LanguageSwitcher />
        <Text onPress={handleAddToCart}>Add to Cart</Text>
        <Text onPress={goToProductDetails}>go to Product details</Text>
      </View>
    </Layout>
  );
};

export default Settings;
