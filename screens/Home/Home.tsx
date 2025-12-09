import { View, ScrollView } from "react-native";
import React from "react";
import HomeBanner from "@/components/Home/HomeBanner";
import { useUnifiedNavigation } from "@/hooks/useNavigation";
import HomeCategorySection from "@/components/Home/HomeCategorySection";
import HomeCategoriesList from "@/components/Home/HomeCategoriesList";

const Home = () => {
  const navigation = useUnifiedNavigation();

  return (
    <ScrollView className="flex-1 bg-background dark:bg-background-dark">
      <HomeBanner
        imageUrl="https://images.unsplash.com/photo-1620331317984-53581633aff6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        onPress={() => {
          navigation.navigate("ProductDetails", { id: "1" });
        }}
      />
      <View className="px-4" style={{ marginTop: 32, marginBottom: 32 }}>
        <HomeCategoriesList />
      </View>
      <HomeCategorySection
        title="makeup"
        categoryId="beauty"
        onProductPress={(id) => navigation.navigate("ProductDetails", { id })}
        onViewAll={() =>
          navigation.navigate("Category", { id: "1", name: "makeup" })
        }
      />
      <View style={{ marginTop: 32, marginBottom: 32 }}>
        <HomeCategorySection
          title="perfume"
          categoryId="fragrances"
          onProductPress={(id) => navigation.navigate("ProductDetails", { id })}
          onViewAll={() =>
            navigation.navigate("Category", { id: "3", name: "perfume" })
          }
        />
      </View>
      <View style={{ marginTop: 32, marginBottom: 32 }}>
        <HomeCategorySection
          title="accessories"
          categoryId="womens-jewellery"
          onProductPress={(id) => navigation.navigate("ProductDetails", { id })}
          onViewAll={() =>
            navigation.navigate("Category", { id: "3", name: "accessories" })
          }
        />
      </View>
      <View style={{ marginTop: 32, marginBottom: 32 }}>
        <HomeBanner
          imageUrl="https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          onPress={() => {
            navigation.navigate("ProductDetails", { id: "1" });
          }}
        />
      </View>
      <View style={{ marginTop: 32, marginBottom: 32 }}>
        <HomeCategorySection
          title="bodyCare"
          categoryId="skin-care"
          onProductPress={(id) => navigation.navigate("ProductDetails", { id })}
          onViewAll={() =>
            navigation.navigate("Category", { id: "3", name: "bodyCare" })
          }
        />
      </View>
      <View style={{ marginTop: 32, marginBottom: 32 }}>
        <HomeCategorySection
          title="bodyCare"
          categoryId="skin-care"
          onProductPress={(id) => navigation.navigate("ProductDetails", { id })}
          onViewAll={() =>
            navigation.navigate("Category", { id: "3", name: "bodyCare" })
          }
        />
      </View>

      <View style={{ marginTop: 32, marginBottom: 32 }}>
        <HomeCategorySection
          title="womensBags"
          categoryId="womens-bags"
          onProductPress={(id) => navigation.navigate("ProductDetails", { id })}
          onViewAll={() =>
            navigation.navigate("Category", { id: "3", name: "womensBags" })
          }
        />
      </View>
    </ScrollView>
  );
};

export default Home;
