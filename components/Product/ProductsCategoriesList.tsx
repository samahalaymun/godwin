import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import React from "react";

import { categories } from "@/constants";
import CategoryCard from "../Category/CategoryCard";
import { useUnifiedNavigation } from "@/hooks/useNavigation";
import { widthScreen } from "@/utils/common";

const ProductsCategoriesList = () => {
  const navigation = useUnifiedNavigation();
  return (
    <View className="flex-1">
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 16 }}>
            <CategoryCard
              key={item.id}
              height={224}
              width={widthScreen / 2 - 20}
              item={item}
              onPress={() =>
                navigation.navigate("Category", {
                  id: item.id,
                  name: item.name,
                  slug:item.slug
                })
              }
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        horizontal={false}
      />
    </View>
  );
};

export default ProductsCategoriesList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flatListContent: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  gridItem: {
    flex: 1, // Ensures items take equal width in a column
    margin: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    alignItems: "center",
    padding: 10,
  },
  itemImage: {
    width: "100%",
    height: 100,
    borderRadius: 4,
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
