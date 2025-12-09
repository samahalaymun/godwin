import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "@/config/colors";
import { useUnifiedNavigation } from "@/hooks/useNavigation";

const CategoryHeader = ({ title }: { title: string }) => {
  const { t, isRTL } = useTranslation();
  const navigation = useUnifiedNavigation();
  const iconColor = (colors && colors.text) || "#2c2423";

  return (
    <SafeAreaView edges={["top"]} className="px-4">
      <View
        className="flex flex-row items-center justify-between py-3 border-b border-b-primary-500"
        style={{
          flexDirection: isRTL ? "row" : "row-reverse",
        }}
      >
        <Text className="text-3xl text-secondary-900 font-semibold font-arabic">
          {title}
        </Text>

        <View className=" p-2">
          <TouchableOpacity
            activeOpacity={0.7} // Optional: Customize the opacity when active
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons
              name={isRTL ? "arrow-back-ios" : "arrow-forward-ios"}
              size={20}
              color={iconColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryHeader;
