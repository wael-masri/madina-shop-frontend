
import BrandApi from "../../Api/BrandApi";
import {
  fetchDataRequestBrand,
  fetchDataSuccessBrand,
  fetchDataFailureBrand,
 
} from "../Actions/BrandActions";

export const getBrands = async (dispatch) => {
  dispatch(fetchDataRequestBrand());
  try {
    const response = await BrandApi.getAll();
    response && dispatch(fetchDataSuccessBrand(response));
  } catch (error) {
    const msg = error.message;
    dispatch(fetchDataFailureBrand(msg));
  }
};

