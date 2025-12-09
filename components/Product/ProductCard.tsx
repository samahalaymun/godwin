import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ProductCardProps } from "@/types";
import { useTranslation } from "@/hooks/useTranslation";

const ProductCard = ({ id, name, price, image, onPress }: ProductCardProps) => {
  const { isRTL } = useTranslation();
  return (
    <TouchableOpacity onPress={() => onPress(id)} className="w-[130px]">
      <View className="bg-background-300 rounded-lg items-center justify-center h-[140px]">
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          className="w-full h-full rounded-lg"
        />
      </View>

      <Text
        className="text-secondary-900/80 mt-1 font-semibold text-base"
        style={{ textAlign: isRTL ? "left" : "right" }}
      >
        ₪ {price}
      </Text>
      <Text
        numberOfLines={2}
        className="text-secondary-600 text-base mt-1"
        style={{ textAlign: isRTL ? "left" : "right" }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
