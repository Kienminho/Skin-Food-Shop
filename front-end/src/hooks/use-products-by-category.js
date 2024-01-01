import { useQuery } from "@tanstack/react-query";
import { productsApi } from "../api/products";
import { useSearchParams } from "react-router-dom";

export const useProductsByCategory = ({
  category = "",
  pageSize = 10,
  pageIndex = 1,
} = {}) => {
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get("category") ?? "SkinCare";
  const price = searchParams.get("price") ?? "minPrice=5000000";
  return useQuery({
    queryKey: [
      "products",
      "products-by-category",
      category || categoryName,
      price,
    ],
    queryFn: () =>
      productsApi.getProductsByCategory(category || categoryName, {
        pageSize,
        pageIndex,
        price,
      }),
  });
};
