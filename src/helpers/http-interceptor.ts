import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    // I cand handle a request with errors here
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (successRes) {
    return successRes;
  },
  async function (error) {
    if (error.response?.status === 401) {
      window.location.href = `${process.env.REACT_APP_BASE_FRONTEND_URL}login`;
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
