import axiosClient from "./axiosClient";

export const productsApi = {
  getAll() {
    return axiosClient.get("/product/get-all-products?pageIndex=3&pageSize=9");
  },
  addProduct() {},
};
