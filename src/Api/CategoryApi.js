import { Axios } from "./Axios";

const CategoryApi = {
  getAll: (limit) => {
    let chainCond = ``;

    if (limit) {
      chainCond = `?limit=${limit}`;
    }

    return Axios.get(`/categories/${chainCond}`);
  },
  getOne: (id) => Axios.get(`/categories/${id}`),
  getByCategory: (id) => Axios.get(`/categories/${id}/subCategories`),
};

export default CategoryApi;
