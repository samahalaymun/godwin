import { View, Text, FlatList } from "react-native";
import React from "react";
import { useUnifiedNavigation } from "@/hooks/useNavigation";
import { useTranslation } from "@/hooks/useTranslation";
import { categories } from "@/constants";
import CategoryCard from "../Category/CategoryCard";
import { Category } from "@/types";

const HomeCategoriesList = () => {
  const { t } = useTranslation();
  const navigation = useUnifiedNavigation();
 
  const goToCategory = (item: Category) => {
    navigation.navigate("Category", { id: item.id, name: item.name,slug:item.slug });
  };
  return (
    <View>
      <View
        className="w-full flex flex-row "
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
          <CategoryCard
            height={224}
            width={160}
            item={item}
            onPress={goToCategory}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
        // style={{ height: 224 }}
      />
    </View>
  );
};

export default HomeCategoriesList;
