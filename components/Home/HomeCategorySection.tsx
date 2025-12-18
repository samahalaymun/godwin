import { View, Text, TouchableOpacity, FlatList } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import colors from "@/config/colors";
import ProductCard from "../Product/ProductCard";
import { useProducts } from "@/hooks/useProducts";

interface Props {
  title: string;
  categoryId: string;
  onViewAll: () => void;
  onProductPress: (id: number) => void;
}

const HomeCategorySection = ({
  title,
  onViewAll,
  onProductPress,
  categoryId,
}: Props) => {
  const { t, isRTL } = useTranslation();
  const iconColor = (colors && colors.text) || "#2c2423";
  const { data, isLoading } = useProducts(categoryId, 6);
  const products = data?.pages.flatMap((page) => page.products) ?? [];

  if (isLoading)
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  return (
    <View className="px-4 w-full">
      {/* Header */}
      <View
        className="flex-row justify-between items-center mb-3"
        style={{
          flexDirection: isRTL ? "row-reverse" : "row",
        }}
      >
        <Text className="text-xl font-bold text-secondary-900">
          {t(`category.${title}`)}
        </Text>
        <TouchableOpacity
          onPress={onViewAll}
          className="flex-row items-center"
          style={{
            flexDirection: isRTL ? "row-reverse" : "row",
          }}
        >
          <Text className="text-secondary-900">{t("home.viewAll")}</Text>
          <MaterialIcons
            name={isRTL ? "chevron-left" : "chevron-right"}
            size={22}
            color={iconColor}
          />
        </TouchableOpacity>
      </View>
      {/* products */}

      <FlatList
        data={products}
        horizontal
        renderItem={({ item }) => (
          <ProductCard
            width={130}
            height={140}
            id={item.id}
            name={item.title}
            price={item.price}
            image={item.thumbnail}
            onPress={onProductPress}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />} // 👈 separator فقط
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeCategorySection;
