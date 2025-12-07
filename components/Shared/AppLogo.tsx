import { View,  StyleSheet, Dimensions, Image } from "react-native";
import React from "react";

const { height:screenHight } = Dimensions.get("window");

const AppLogo = ({
  width,
  height,
  ratio,
}: {
  width: number;
  height: number;
  ratio: number;
}) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: screenHight * ratio,
      }}
      className=" flex justify-center "
    >
      <Image
        source={require("@/assets/auth/logo-2.png")}
        alt="logo"
        style={{ width: width, height: height, objectFit: "contain" }}
      />
    </View>
  );
};

export default AppLogo;
