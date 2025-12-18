import { View, Text } from "react-native";
import React from "react";
import { Spinner } from "../ui/spinner";
import colors from "@/config/colors";

const ProductsPageSkeleton = () => {
  return (
    <View className="flex-1 bg-background flex items-center justify-center">
      <Spinner size="large" color={colors.primary} />
    </View>
  );
};

export default ProductsPageSkeleton;
