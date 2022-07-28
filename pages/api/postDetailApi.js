import axiosClient from "./axiosClient";

const postDetailApi = {
  getAll() {
    const url = "/category";
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/post/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/contect-covid";
    return axiosClient.post(url, data, {});
  },

  update(data) {
    const url = `/contect-covid${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/contect-covid${id}`;
    return axiosClient.delete(url);
  },
};

export default postDetailApi;
