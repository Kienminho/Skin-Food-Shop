import axiosClient from "./axiosClient";

export const userApi = {
  getAll() {
    return axiosClient.get("/user/get-all-users");
  },
};
