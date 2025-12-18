import { useInfiniteQuery, InfiniteData } from "@tanstack/react-query";
import { searchProduct } from "@/services/products";
import { Product } from "@/types";

export type SearchProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export const useSearchProducts = (query: string, limit = 16) => {
  return useInfiniteQuery<
    SearchProductsResponse,
    Error,
    InfiniteData<SearchProductsResponse>,
    ["search-products", string],
    number
  >({
    queryKey: ["search-products", query],
    initialPageParam: 1,
    enabled: query.trim().length > 0,
    queryFn: ({ pageParam = 1, signal }) =>
      searchProduct({
        query,
        limit,
        page: pageParam,
        signal,
      }),

    getNextPageParam: (lastPage, allPages) => {
      const loaded = lastPage.skip + lastPage.products.length;
      return loaded < lastPage.total ? allPages.length + 1 : undefined;
    },

    staleTime: 1000 * 30, // 30 ثانية cache
  });
};
