import ProductApi from "../../Api/ProductApi";
import {
  fetchDataRequestProduct,
  fetchDataSuccessProduct,
  fetchDataFailureProduct,
  fetchDataSuccessProductById,
  fetchDataSuccessProductRelated,
  fetchDataRequestRelatedProduct,
  fetchDataFailureRelatedProduct,
  fetchDataRequestProductById,
  fetchDataFailureProductById,
  fetchDataRequestProductFiltered,
  fetchDataSuccessProductFiltered,
  fetchDataFailureProductFiltered,
} from "../Actions/ProductActions";

export const getProducts = async (
  dispatch,
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
  dispatch(fetchDataRequestProduct());
  try {
    const response = await ProductApi.getAll(
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
    );
    response && dispatch(fetchDataSuccessProduct(response));
  } catch (error) {
    const msg = error.message;
    dispatch(fetchDataFailureProduct(msg));
  }
};
export const getProductById = async (dispatch, id) => {
  dispatch(fetchDataRequestProductById());
  try {
    const response = await ProductApi.getOne(id);
    response && dispatch(fetchDataSuccessProductById(response.data));
  } catch (error) {
    const msg = error.message;
    dispatch(fetchDataFailureProductById(msg));
  }
};

export const getProductRelated = async (dispatch, category) => {
  dispatch(fetchDataRequestRelatedProduct());
  try {
    const response = await ProductApi.getRelated(category);
    response && dispatch(fetchDataSuccessProductRelated(response.data));
  } catch (error) {
    const msg = error.message;
    dispatch(fetchDataFailureRelatedProduct(msg));
  }
};
export const getProductfilter = async (dispatch,limit,category) => {
  dispatch(fetchDataRequestProductFiltered());
  try {
    const response = await ProductApi.getAllFilter(category,limit);
    response && dispatch(fetchDataSuccessProductFiltered(response.data));
  } catch (error) {
    const msg = error.message;
    dispatch(fetchDataFailureProductFiltered(msg));
  }
};
