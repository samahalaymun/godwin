import axios from "axios";

export const fetchProducts = async ({
  limit,
}: {
  limit?: number;
}) => {
  const res = await axios.get("https://dummyjson.com/products", {
    params: {
      limit,
    },
  });

  return res.data;
};

export const fetchProductsByCatgory = async ({
  category,
  limit,
}: {
  category?: string;
  limit?: number;
}) => {
  const res = await axios.get(
    `https://dummyjson.com/products/category/${category}`,
    {
      params: {
        limit,
      },
    }
  );

  return res.data;
};

