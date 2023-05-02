import { Axios } from "./Axios";

const CartApi = {
  getAll: () => Axios.get("/carts/"),
  create: (params) => Axios.post(`/carts/`,params),
  updateQuantity : (id,params) => Axios.put(`/carts/${id}`,params),
  delete: (id) => Axios.delete(`/carts/${id}`),
  clearAll: () => Axios.delete(`/carts/clear/all`),
  applyCoupon: (params) => Axios.put(`/carts/coupon`,params),

};

export default CartApi;
