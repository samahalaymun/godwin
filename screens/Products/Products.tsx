import { View, Text, ScrollView } from "react-native";
import React from "react";
import Layout from "../_Layout";
import ProductsCategoriesList from "@/components/Product/ProductsCategoriesList";

const Products = () => {
  return (
    <Layout>
      <ProductsCategoriesList />
    </Layout>
  );
};

export default Products;
