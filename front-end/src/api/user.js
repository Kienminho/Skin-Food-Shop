import axiosClient from "./axiosClient";

export const userApi = {
  getAll() {
    return axiosClient.get("/user/get-all-users");
  },
  getMe() {
    return axiosClient.get(`/user/get-info-mine`);
  },
  updateMe(body) {
    return axiosClient.put(`/user/update-info`, body);
  },
  delete(id) {
    return axiosClient.delete(`/user/delete-user/${id}`);
  },
};
