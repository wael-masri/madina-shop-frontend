import { Axios } from "./Axios";
import { OnlineAxios } from "./OnlineAxios";

const OrderApi = {
  create: (id,params) => Axios.post(`/orders/${id}`, params),
  checkoutSession: (id,params) => OnlineAxios.post(`/orders/checkout-session/${id}`,params),
  getAll: (action) => Axios.get(`/orders/byUser/?refund=${action}&sort=-createdAt`),
  updateRefund: (id,refund) => Axios.put(`/orders/${id}`,{refund}),

};

export default OrderApi;
