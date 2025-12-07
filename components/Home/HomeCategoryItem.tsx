import { useTranslation } from "@/hooks/useTranslation";
import { HomeCategoryItemProps } from "@/types";
import { TouchableOpacity, Image, Text, View } from "react-native";

export function HomeCategoryItem({ item, onPress }: HomeCategoryItemProps) {
  const { t } = useTranslation();
  console.log(t(`category.${item.name}`));

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={{ alignItems: "center", flexShrink: 0 }}
      className="relative w-56 h-70"
    >
      <Image
        source={{ uri: item.icon }}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
          borderRadius: 8,
        }}
      />
      <View className="absolute inset-0 rounded-lg bg-black/20" />

      <View className="absolute bottom-3 w-full">
        <Text
          style={{ marginTop: 8, textAlign: "center" }}
          className=" text-xl font-bold text-white"
        >
          {t(`category.${item.name}`)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
