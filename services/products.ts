import { api } from "@/api/axiosInstance";

export const fetchProducts = async ({
  limit,
  page,
}: {
  limit: number;
  page: number;
}) => {
  const skip = (page - 1) * limit;
  const res = await api.get("/products/", {
    params: {
      limit,
      skip,
    },
  });

  return res.data;
};

export const fetchProductsByCatgory = async ({
  category,
  limit,
  page,
}: {
  category?: string;
  limit: number;
  page: number;
}) => {
  const skip = (page - 1) * limit;

  const res = await api.get(`/products/category/${category}`, {
    params: {
      limit,
      skip,
    },
  });

  return res.data;
};

export const fetchCategories = async () => {
  const res = await api.get("products/categories");
  return res.data;
};

export const searchProduct = async ({
  query,
  limit,
  page,
  signal,
}: {
  query: string;
  limit: number;
  page: number;
  signal: AbortSignal;
}) => {
  const skip = (page - 1) * limit;
  const res = await api.get("/products/search", {
    params: {
      q: query,
      limit,
      skip,
    },
    signal,
  });

  return res.data;
};
