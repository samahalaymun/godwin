import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ProductCardProps } from "@/types";
import { useTranslation } from "@/hooks/useTranslation";
import { Button, ButtonText } from "../ui/button";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "@/config/colors";

const ProductCard = ({
  id,
  name,
  price,
  image,
  onPress,
  width,
  height,
  homePage = true,
}: ProductCardProps) => {
  const { isRTL ,t} = useTranslation();
  const iconColor = (colors && colors.text) || "#2c2423";

  return (
    <TouchableOpacity
      onPress={() => onPress(id)}
      className="w-[130px]"
      style={{ width: width }}
    >
      <View
        className="bg-background-300 rounded-lg items-center justify-center"
        style={{ height: height }}
      >
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          className="w-full h-full rounded-lg"
        />
      </View>
      <View
        style={{
          flexDirection: isRTL ? "row-reverse" : "row",
        }}
        className="flex-row justify-between items-center mt-1"
      >
        <Text
          className="text-secondary-900/80  font-semibold text-base"
          style={{ textAlign: isRTL ? "right" : "left" }}
        >
          ₪ {price}
        </Text>
        {!homePage && (
          <TouchableOpacity className="flex-row items-center">
            <MaterialIcons
              name="favorite-outline"
              size={20}
              color={iconColor}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ minHeight: 44 }}>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          className="text-secondary-600 text-base"
          style={{ textAlign: isRTL ? "right" : "left" }}
        >
          {name}
        </Text>
      </View>
      {!homePage && (
        <Button className="mt-3">
          <ButtonText>{t("cart.addToCart")}</ButtonText>
        </Button>
      )}
    </TouchableOpacity>
  );
};
export default React.memo(ProductCard);
