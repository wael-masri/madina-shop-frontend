import { Axios } from "./Axios";

const ReviewApi = {
  create: (params) => Axios.post(`/reviews/`, params),
  getAll: () => Axios.get("/reviews/"),
  getByProduct: (id, limit, page) =>
    Axios.get(
      `/products/${id}/reviews/?limit=${limit}&page=${page}&sort=-createdAt`
    ),
  getOne: (id) => Axios.get(`/reviews/${id}`),
  update: (id, params) => Axios.put(`/reviews/${id}`, params),
  delete: (id) => Axios.delete(`/reviews/${id}`),
};

export default ReviewApi;
