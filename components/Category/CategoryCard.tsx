import React from 'react'
import { useTranslation } from '@/hooks/useTranslation';
import { TouchableOpacity, Image, Text, View } from "react-native";
import { CategoryCardProps } from '@/types';

const CategoryCard = ({ item, onPress,width,height }: CategoryCardProps) => {
     const { t } = useTranslation();
  return (
    <TouchableOpacity
         onPress={() => onPress(item)}
         style={{ alignItems: "center", flexShrink: 0,width:width,height:height }}
         className="relative w-40 h-56"
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
  )
}

export default CategoryCard