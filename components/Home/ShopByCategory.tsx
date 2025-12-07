import { View, Text, FlatList } from "react-native";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Category, MainStackParamList } from "@/types";
import { HomeCategoryItem } from "./HomeCategoryItem";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { categories } from "@/constants";

type Navigation = NativeStackNavigationProp<MainStackParamList, "Home">;

const ShopByCategory = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<Navigation>();



  const goToCategory = (item: Category) => {
    navigation.navigate("Category", { id: item.id, name: item.name });
  };

  return (
    <View style={{ marginTop: 32, marginBottom: 32 }}>
      <View
        className="w-full flex flex-row"
        style={{ marginBottom: 10, justifyContent: "center" }}
      >
        <Text className="text-2xl text-secondary-900/80 uppercase">
          {t("home.shopByCategory")}
        </Text>
      </View>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HomeCategoryItem item={item} onPress={goToCategory} />
        )}
        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
        style={{ height: 288 }}
      />
    </View>
  );
};

export default ShopByCategory;
