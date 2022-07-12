import axiosClient from "./axiosClient";

const categoryApi = {
  getAll(params) {
    const url = "/contect-covid";
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/contect-covid${id}`;
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

export default categoryApi;
