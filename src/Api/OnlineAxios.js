import axios from "axios";

const baseUrl = `${process.env.REACT_APP_API_URL}/api`;
const getToken = () => localStorage.getItem("tokenMadinaShopWeb");

export const OnlineAxios = axios.create({
  baseURL: baseUrl,
});

OnlineAxios.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  };
});

OnlineAxios.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    if (!err.response) {
      return alert(err);
    }
    throw err.response;
  }
);

// AxiosFormData.interceptors.request.use(async (config) => {
//   return {
//     ...config,
//     headers: {
//       "Content-Type": "multipart/form-data",
//       authorization: `Bearer ${getToken()}`,
//     },
//   };
// });
// AxiosFormData.interceptors.response.use(
//   (response) => {
//     if (response && response.data) return response.data;
//     return response;
//   },
//   (err) => {
//     if (!err.response) {
//       return alert(err);
//     }
//     throw err.response;
//   }
// );

// export const AxiosFormData = axios.create({
//   baseURL: baseUrl,
// });
