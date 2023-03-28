import axios from "axios";

// 封装axios
const request = axios.create({
  baseURL: "http://kumanxuan1.f3322.net:8881/cms",
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // console.log('config:', config);
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response.data;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default request;