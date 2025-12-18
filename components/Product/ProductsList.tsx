import { View, FlatList } from "react-native";
import React from "react";
import { ProductsListProps } from "@/types";
import ProductsPageLoading from "../Loading/ProductsPageLoading";
import ProductCard from "./ProductCard";
import { widthScreen } from "@/utils/common";
import { useUnifiedNavigation } from "@/hooks/useNavigation";

const ProductsList = ({
  products,
  isRefetching,
  refetch,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: ProductsListProps) => {
  const navigation = useUnifiedNavigation();

  const handlePress = React.useCallback(
    (id: number) => {
      navigation.navigate("ProductDetails", { id });
    },
    [navigation]
  );

  console.log("product list render");
  
  return (
    <View
      className="px-4"
      style={{
        paddingTop: 40,
        paddingBottom: 40,
      }}
    >
      <FlatList
        data={products}
        horizontal={false}
        numColumns={2}
        refreshing={isRefetching}
        onRefresh={() => refetch()}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 16 }}>
            <ProductCard
              height={180}
              width={widthScreen / 2 - 20}
              id={item.id}
              name={item.title}
              price={item.price}
              image={item.thumbnail}
              onPress={handlePress}
              homePage={false}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          isFetchingNextPage ? (
            <View className="py-6">
              <ProductsPageLoading />
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default React.memo(ProductsList);

