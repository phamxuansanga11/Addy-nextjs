import axiosClient from "./axiosClient";

const postsApi = {
  getAll(params) {
    const url = "/post";
    return axiosClient.get(url, { params: params });
  },
  get(category, id, params) {
    const url = `/${category}/${id}`;
    return axiosClient.get(url, params);
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

export default postsApi;
