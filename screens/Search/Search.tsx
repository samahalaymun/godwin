import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { SearchIcon } from "@/components/ui/icon";
import { useUnifiedNavigation } from "@/hooks/useNavigation";

const Search = () => {
  const { t, isRTL } = useTranslation();
  const navigation = useUnifiedNavigation();

  return (
    <View className="flex-1 bg-background" style={{ marginTop: 15 }}>
      {/* --- Header --- */}

      <View className="border-b border-secondary-800">
        <View
          className="px-4 flex flex-row"
          style={{
            marginBottom: 10,
            justifyContent:isRTL ? "flex-start" : "flex-end",
            alignItems: "center",
            paddingHorizontal: 16,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 rounded-full bg-secondary-200"
          >
            <MaterialIcons name="close" size={32} color="#444" />
          </TouchableOpacity>
        </View>

        {/* --- Search Bar --- */}
        <View
          className="w-full flex-row px-4 items-center"
          style={{ paddingBottom: 10 }}
        >
          <Input
            className="w-full bg-secondary-200 rounded-full px-3 py-4"
            size="xl"
          >
            {isRTL ? (
              <InputSlot className="">
                <InputIcon as={SearchIcon} />
              </InputSlot>
            ) : null}
            <InputField
              className="placeholder:text-base text-secondary-900"
              placeholder={t("search.inputPlaceHolder")}
              style={{
                textAlign: isRTL ? "right" : "left",
                writingDirection: isRTL ? "rtl" : "ltr",
              }}
            />
            {!isRTL ? (
              <InputSlot className="">
                <InputIcon as={SearchIcon} />
              </InputSlot>
            ) : null}
          </Input>
        </View>
      </View>
      {/* --- Empty State --- */}
      <View className="flex-1 justify-center items-center mt-10">
        <Text className="text-2xl font-bold text-primary-500 mt-4">
          {t("search.title")}
        </Text>
        <Text className="text-lg text-secondary-900/70 mt-2">
          {t("search.placeholder")}
        </Text>
      </View>
    </View>
  );
};

export default Search;
