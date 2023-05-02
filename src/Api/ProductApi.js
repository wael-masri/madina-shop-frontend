import { Axios } from "./Axios";

const ProductApi = {
  create: (params) => Axios.post(`/products/`, params),
  getAllFilter: (category, limit) =>
    Axios.get(`/products/?category=${category}&limit=${limit}`),
  getAll: (
    limit,
    page,
    filterCategory,
    filterBrand,
    dataSorting,
    priceSorting,
    colorFilter,
    tagFilter,
    sizeFilter,
    searchItem
  ) => {
    let filteration = limit ? `?limit=${limit}&page=${page}` : "";
    if (filterCategory) {
      filteration += `&category=${filterCategory}`;
    }
    if (filterBrand && filterBrand.length !== 0) {
      filterBrand.forEach((element) => {
        filteration += `&brand=${element}`;
      });
    }
    if (dataSorting) {
      if (dataSorting === "lowtohigh") {
        filteration += `&sort=price`;
      } else if (dataSorting === "hightolow") {
        filteration += `&sort=-price`;
      } else if (dataSorting === "rating") {
        filteration += `&sort=-rating`;
      } else {
        filteration += `&sort=-createdAt`;
      }
    }
    if (priceSorting && priceSorting.length !== 0) {
      filteration += `&price[gte]=${priceSorting[0]}&price[lte]=${priceSorting[1]}`;
    }
    if (tagFilter) {
      filteration += `&tag=${tagFilter}`;
    }
    if (colorFilter) {
      filteration += `&color=${colorFilter}`;
    }
    if (sizeFilter) {
      filteration += `&size=${sizeFilter}`;
    }
    return Axios.get(`/products/${filteration}`);
  },
  getBySearching: (searchItem) => {
    let filteration = ``;
    if (searchItem) {
      filteration += `?keyword=${searchItem}`;
    }

    return Axios.get(`/products/${filteration}`);
  },
  getOne: (id) => Axios.get(`/products/${id}`),
  update: (id, params) => Axios.put(`/products/${id}`, params),
  delete: (id) => Axios.delete(`/products/${id}`),
  getRelated: (categorey) => Axios.get(`/products/?category=${categorey}`),
  getByBlog: () => Axios.get(`/products/?limit=3&sort=-createdAt&priceAfterDiscount[gt]=0`),
};

export default ProductApi;
