import { View, ScrollView } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "@/types";
import { useRoute } from "@react-navigation/native";
import { useTranslation } from "@/hooks/useTranslation";
import CategoryHeader from "@/components/Header/CategoryHeader";

type Props = NativeStackScreenProps<MainStackParamList, "Category">;

const Category = ({ navigation }: Props) => {
  const route = useRoute<Props["route"]>();
  const {  name } = route.params;
  const { t } = useTranslation();
  
  return (
    <View>
      {/* Header */}
      <CategoryHeader title={t(`category.${name}`)} />
      <ScrollView className="px-4 pt-6 bg-background flex-1"></ScrollView>
    </View>
  );
};

export default Category;
