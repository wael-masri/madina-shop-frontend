import { Axios } from "./Axios";

const BrandApi = {
  getAll: () => Axios.get("/brands/"),
  getOne: (id) => Axios.get(`/brands/${id}`),
};

export default BrandApi;
