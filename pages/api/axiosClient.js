import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "https://62d4e0b9cd960e45d45cfd64.mockapi.io/api/",
  // baseURL: "https://jsonplaceholder.typicode.com/",
  // baseURL: "http://localhost:4001",
  baseURL: "http://192.168.100.4:4001",
  headers: {
    "Content-Type": "application/json",
  },
});

//Interceptor
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
