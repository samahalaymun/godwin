import React from "react";
import { TouchableOpacity, View } from "react-native";
import { HomeBannerProps } from "@/types";
import { Image } from "react-native";
import { Button, ButtonText } from "../ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const HomeBanner: React.FC<HomeBannerProps> = ({
  imageUrl = "https://via.placeholder.com/400x150", // مثال مؤقت
  onPress,
}) => {
    const { t } = useTranslation();
  
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{ width: "100%", height: 400, flexShrink: 0 }}
      className="relative"
    >
      <Image
        source={{ uri: imageUrl }}
        className="w-full  overflow-hidden"
        resizeMode="cover"
        alt="banner-img"
        style={{ width: "100%", height: "100%" }}
      />

      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.06)", // شفاف جزئي
        }}
        className="absolute flex justify-end items-center  top-0 bottom-0 left-0 right-0"
      >
        <Button className="align-bottom mb-10 bg-primary-900" onPress={onPress}>
          <ButtonText>{t("home.shopNow")}</ButtonText>
        </Button>
      </View>
    </TouchableOpacity>
  );
};

export default HomeBanner;
