// hooks/useProducts.ts
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { fetchProductsByCatgory } from "@/services/products";
import { Product } from "@/types";

export type ProductsResponse = {
  products: Product[];
  skip: number;
  total: number;
  limit: number;
};

export const useProducts = (category?: string, limit = 16) => {
  return useInfiniteQuery<
    ProductsResponse,
    Error,
    InfiniteData<ProductsResponse>,
    (string | undefined)[],
    number
  >({
    queryKey: ["products", category],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) =>
      fetchProductsByCatgory({
        category,
        limit,
        page: pageParam,
      }),
    getNextPageParam: (lastPage, allPages) => {
      const loadedProducts = lastPage.skip + lastPage.products.length;

      return loadedProducts < lastPage.total ? allPages.length + 1 : undefined;
    },
  });
};
