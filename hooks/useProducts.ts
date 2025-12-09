import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchProductsByCatgory } from "@/services/products";

export const useProducts = (category?: string, limit: number = 6) => {
  return useQuery({
    queryKey: ["products", category, limit],
    queryFn: () => fetchProductsByCatgory({ category, limit }),
  });
};
