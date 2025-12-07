import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import Header from "@/components/Header/Header";
import colors from "@/config/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Layout from "../_Layout";

const Cart = () => {
  const { t, isRTL } = useTranslation();
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();

  return (
    <Layout>
      <ScrollView className="">
        <Text>samah</Text>
      </ScrollView>
    </Layout>
  );
};

export default Cart;
