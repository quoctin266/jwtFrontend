import axios from "axios";
import { toast } from "react-toastify";
// import nprogress from "nprogress";

// nprogress.configure({ showSpinner: false, trickleSpeed: 40 }); //config loading bar

const instance = axios.create({
  baseURL: "http://localhost:8081/api/v1/",
});

instance.defaults.withCredentials = true;
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // nprogress.start(); //start running loading bar
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // nprogress.done();

    return response && response.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status = error.response?.status || 500;
    // we can handle global errors here
    switch (status) {
      // authentication (token related issues)
      case 401: {
        toast.error("Unauthenticated.");
        return Promise.reject(error);
      }

      // forbidden (permission related issues)
      case 403: {
        toast.error("forbidden.");
        return error.response?.data
          ? error.response.data
          : Promise.reject(error);
      }

      // bad request
      case 400: {
        return Promise.reject(error);
      }

      // not found
      case 404: {
        return Promise.reject(error);
      }

      // conflict
      case 409: {
        return Promise.reject(error);
      }

      // unprocessable
      case 422: {
        return Promise.reject(error);
      }

      // generic api error (server related) unexpected
      default: {
        return Promise.reject(error);
      }
    }
  }
);

export default instance;
