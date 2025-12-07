import { View, Text } from "react-native";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useAuthStore } from "@/store/useAuthStore";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeHeader = () => {
  const { t, isRTL } = useTranslation();
  const user = useAuthStore((state) => state.user);

  return (
    <SafeAreaView edges={["top"]}>
      <View
        className="flex flex-row items-center px-4 py-5"
        style={{
          flexDirection: isRTL ? "row" : "row-reverse",
        }}
      >
        <Text className="text-2xl text-secondary-600 font-semibold">
          {t("header.hello")} {user?.name}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;
