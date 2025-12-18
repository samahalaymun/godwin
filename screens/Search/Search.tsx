import { View, TouchableOpacity } from "react-native";
import React, { useMemo, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { SearchIcon } from "@/components/ui/icon";
import { useUnifiedNavigation } from "@/hooks/useNavigation";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchProducts } from "@/hooks/useSearchProduct";
import ProductsPageLoading from "@/components/Loading/ProductsPageLoading";
import ProductsList from "@/components/Product/ProductsList";
import SearchProductEmptyState from "@/components/EmptyState/SearchProductEmptyState";
import SearchProductNoResult from "@/components/EmptyState/SearchProductNoResult";

const Search = () => {
  const { t, isRTL } = useTranslation();
  const navigation = useUnifiedNavigation();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    refetch,
  } = useSearchProducts(debouncedQuery);
  const products = useMemo(
    () => data?.pages.flatMap((page) => page.products) ?? [],
    [data]
  );
  const hasQuery = debouncedQuery.trim().length > 0;
  const hasProducts = products.length > 0;
  const showInitialEmpty = !hasQuery;
  const showLoading = hasQuery && isLoading;
  const showProducts = hasQuery && !isLoading && hasProducts;
  const showNoResults = hasQuery && !isLoading && !hasProducts;

  return (
    <View className="flex-1 bg-background" style={{ marginTop: 15 }}>
      {/* --- Header --- */}

      <View className="border-b border-secondary-800">
        <View
          className="px-4 flex flex-row"
          style={{
            marginBottom: 10,
            justifyContent: isRTL ? "flex-end" : "flex-start",
            alignItems: "center",
            paddingHorizontal: 16,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 rounded-full bg-secondary-200"
          >
            <MaterialIcons name="close" size={32} color="#444" />
          </TouchableOpacity>
        </View>

        {/* --- Search Bar --- */}
        <View
          className="w-full flex-row px-4 items-center"
          style={{ paddingBottom: 10 }}
        >
          <Input
            className="w-full bg-secondary-200 rounded-full px-3 py-4"
            size="xl"
          >
            {isRTL ? (
              <InputSlot className="">
                <InputIcon as={SearchIcon} />
              </InputSlot>
            ) : null}
            <InputField
              className="placeholder:text-base text-secondary-900"
              placeholder={t("search.inputPlaceHolder")}
              style={{
                textAlign: isRTL ? "right" : "left",
                writingDirection: isRTL ? "rtl" : "ltr",
              }}
              onChangeText={setQuery}
            />
            {!isRTL ? (
              <InputSlot className="">
                <InputIcon as={SearchIcon} />
              </InputSlot>
            ) : null}
          </Input>
        </View>
      </View>

      <View className="flex-1">
        {/* 1️⃣ Initial Empty State */}
        {showInitialEmpty && <SearchProductEmptyState />}

        {/* 2️⃣ Loading */}
        {showLoading && <ProductsPageLoading />}

        {/* 3️⃣ Products List */}
        {showProducts && (
          <ProductsList
            key="search-products-list"
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            products={products}
            isFetchingNextPage={isFetchingNextPage}
            isRefetching={isRefetching}
            refetch={refetch}
          />
        )}

        {/* 4️⃣ No Results */}
        {showNoResults && <SearchProductNoResult />}
      </View>
    </View>
  );
};

export default Search;
