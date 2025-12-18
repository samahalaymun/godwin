import { View } from "react-native";
import React, { useMemo } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "@/types";
import { useRoute } from "@react-navigation/native";
import { useTranslation } from "@/hooks/useTranslation";
import CategoryHeader from "@/components/Header/CategoryHeader";
import { useProducts } from "@/hooks/useProducts";
import ProductsPageLoading from "@/components/Loading/ProductsPageLoading";
import ProductsList from "@/components/Product/ProductsList";

type Props = NativeStackScreenProps<MainStackParamList, "Category">;

const Category = () => {
  const route = useRoute<Props["route"]>();
  const { name, slug } = route.params;
  const { t } = useTranslation();
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isRefetching,
  } = useProducts(slug, 10);
  const products = useMemo(
    () => data?.pages.flatMap((page) => page.products) ?? [],
    [data]
  );

  return (
    <View className="flex-1">
      {/* Header */}
      <CategoryHeader title={t(`category.${name}`)} />

      {/* products */}
      <View className="flex-1">
        {isLoading && <ProductsPageLoading />}
        {!isLoading && data && (
          <ProductsList
            key={"category-products-list"}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            products={products}
            isFetchingNextPage={isFetchingNextPage}
            isRefetching={isRefetching}
            refetch={refetch}
          />
        )}
      </View>
    </View>
  );
};

export default Category;
