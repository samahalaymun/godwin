import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { HeaderProps } from "@/types";
import { useUnifiedNavigation } from "@/hooks/useNavigation";

const Header: React.FC<HeaderProps> = ({ title, serachButton = false }) => {
  const { isRTL } = useTranslation();
  const navigation = useUnifiedNavigation();
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
        {serachButton && (
          <View className="bg-background-900 p-2 rounded-full">
            <TouchableOpacity
              activeOpacity={0.7} // Optional: Customize the opacity when active
              onPress={() => navigation.navigate("Search")}
            >
              <MaterialIcons name="search" size={20} color={"#fff"} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;
