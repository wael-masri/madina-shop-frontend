
import CartApi from "../../Api/CartApi";
import {
  fetchDataRequestCart,
  fetchDataSuccessCart,
  fetchDataFailureCart,
 
} from "../Actions/CartActions";

export const createCart = async (dispatch,data) => {
  dispatch(fetchDataRequestCart());
  try {
    const response = await CartApi.create(data);
    response && dispatch(fetchDataSuccessCart(response));
  } catch (error) {
    const msg = error.message;
    dispatch(fetchDataFailureCart(msg));
  }
};
export const getCarts = async (dispatch) => {
  dispatch(fetchDataRequestCart());
  try {
    const response = await CartApi.getAll();
    response && dispatch(fetchDataSuccessCart(response));
  } catch (error) {
     let msg = error.data.message
    dispatch(fetchDataFailureCart(msg));
  }
};

