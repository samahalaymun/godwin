import { View, ScrollView } from "react-native";
import React from "react";
import HomeBanner from "@/components/Home/HomeBanner";
import { useUnifiedNavigation } from "@/hooks/useNavigation";
import HomeCategorySection from "@/components/Home/HomeCategorySection";
import HomeCategoriesList from "@/components/Home/HomeCategoriesList";
import LoginPopup from "@/components/Auth/LoginPopup";
import { useLoginPopup } from "@/hooks/useLoginPopup";

const Home = () => {
  const navigation = useUnifiedNavigation();
  const { showPopup, closePopup } = useLoginPopup();

  return (
    <ScrollView className="flex-1 bg-background dark:bg-background-dark">
      <HomeBanner
        imageUrl="https://images.unsplash.com/photo-1620331317984-53581633aff6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        onPress={() => {
          navigation.navigate("ProductDetails", { id: 1 });
        }}
        key={"top-banner"}
      />
      <View className="px-4" style={{ marginTop: 32, marginBottom: 32 }}>
        <HomeCategoriesList />
      </View>
      <HomeCategorySection
        key={"beauty"}
        title="makeup"
        categoryId="beauty"
        onProductPress={(id) => navigation.navigate("ProductDetails", { id })}
        onViewAll={() =>
          navigation.navigate("Category", {
            id: "1",
            name: "makeup",
            slug: "beauty",
          })
        }
      />
      <View style={{ marginTop: 32, marginBottom: 32 }}>
        <HomeCategorySection
          key={"fragrances"}
          title="perfume"
          categoryId="fragrances"
          onProductPress={(id) => navigation.navigate("ProductDetails", { id })}
          onViewAll={() =>
            navigation.navigate("Category", {
              id: "3",
              name: "perfume",
              slug: "fragrances",
            })
          }
        />
      </View>
      <View style={{ marginTop: 32, marginBottom: 32 }}>
        <HomeCategorySection
          key={"womens-jewellery"}
          title="accessories"
          categoryId="womens-jewellery"
          onProductPress={(id) => navigation.navigate("ProductDetails", { id })}
          onViewAll={() =>
            navigation.navigate("Category", {
              id: "3",
              name: "accessories",
              slug: "womens-jewellery",
            })
          }
        />
      </View>
      <View style={{ marginTop: 32, marginBottom: 32 }}>
        <HomeBanner
          imageUrl="https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          onPress={() => {
            navigation.navigate("ProductDetails", { id: 1 });
          }}
          key={"middel-banner"}
        />
      </View>
      <View style={{ marginTop: 32, marginBottom: 32 }}>
        <HomeCategorySection
          key={"skin-care"}
          title="skinCare"
          categoryId="skin-care"
          onProductPress={(id) => navigation.navigate("ProductDetails", { id })}
          onViewAll={() =>
            navigation.navigate("Category", {
              id: "3",
              name: "bodyCare",
              slug: "skin-care",
            })
          }
        />
      </View>
      <View style={{ marginTop: 32, marginBottom: 32 }}>
        <HomeCategorySection
          key={"body-care"}
          title="bodyCare"
          categoryId="skin-care"
          onProductPress={(id) => navigation.navigate("ProductDetails", { id })}
          onViewAll={() =>
            navigation.navigate("Category", {
              id: "3",
              name: "bodyCare",
              slug: "skin-care",
            })
          }
        />
      </View>

      <View style={{ marginTop: 32, marginBottom: 32 }}>
        <HomeCategorySection
          key={"womens-bags"}
          title="womensBags"
          categoryId="womens-bags"
          onProductPress={(id) => navigation.navigate("ProductDetails", { id })}
          onViewAll={() =>
            navigation.navigate("Category", {
              id: "3",
              name: "womensBags",
              slug: "womens-bags",
            })
          }
        />
      </View>

      {/* <LoginPopup
        visible={showPopup}
        onClose={closePopup}
        onLogin={() => {
          closePopup();
          navigation.navigate("Auth", { screen: "Login" });
        }}
      /> */}
    </ScrollView>
  );
};

export default Home;
