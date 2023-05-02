import {
  FETCH_DATA_FAILURE_PRODUCT,
  FETCH_DATA_REQUEST_PRODUCT,
  FETCH_DATA_SUCCESS_PRODUCT,
  FETCH_DATA_SUCCESS_PRODUCT_BY_ID,
  FETCH_DATA_PRODUCT_RELATED,
  FETCH_DATA_REQUEST_Related_PRODUCT,
  FETCH_DATA_FAILURE_Related_PRODUCT,
  FETCH_DATA_REQUEST_PRODUCT_BY_ID,
  FETCH_DATA_FAILURE_PRODUCT_BY_ID,
  FETCH_DATA_REQUEST_PRODUCT_FILTERED,
  FETCH_DATA_SUCCESS_PRODUCT_FILTERED,
  FETCH_DATA_FAILURE_PRODUCT_FILTERED,
} from "../Types/ProductTypes";

export const fetchDataRequestProduct = () => {
  const action = {
    type: FETCH_DATA_REQUEST_PRODUCT,
  };
  return action;
};
export const fetchDataSuccessProduct = (data) => {
  const action = {
    type: FETCH_DATA_SUCCESS_PRODUCT,
    payload: data,
  };
  return action;
};
export const fetchDataFailureProduct = (error) => {
  const action = {
    type: FETCH_DATA_FAILURE_PRODUCT,
    payload: error,
  };
  return action;
};

export const fetchDataSuccessProductById = (data) => {
  const action = {
    type: FETCH_DATA_SUCCESS_PRODUCT_BY_ID,
    payload: data,
  };
  return action;
};
export const fetchDataSuccessProductRelated = (data) => {
  const action = {
    type: FETCH_DATA_PRODUCT_RELATED,
    payload: data,
  };
  return action;
};

export const fetchDataRequestRelatedProduct = () => {
  const action = {
    type: FETCH_DATA_REQUEST_Related_PRODUCT,
  };
  return action;
};
export const fetchDataFailureRelatedProduct = (error) => {
  const action = {
    type: FETCH_DATA_FAILURE_Related_PRODUCT,
    payload: error,
  };
  return action;
};

export const fetchDataRequestProductById = () => {
  const action = {
    type: FETCH_DATA_REQUEST_PRODUCT_BY_ID,
  };
  return action;
};
export const fetchDataFailureProductById = (error) => {
  const action = {
    type: FETCH_DATA_FAILURE_PRODUCT_BY_ID,
    payload: error,
  };
  return action;
};

export const fetchDataRequestProductFiltered = () => {
  const action = {
    type: FETCH_DATA_REQUEST_PRODUCT_FILTERED,
  };
  return action;
};
export const fetchDataSuccessProductFiltered = (data) => {
  const action = {
    type: FETCH_DATA_SUCCESS_PRODUCT_FILTERED,
    payload: data,
  };
  return action;
};
export const fetchDataFailureProductFiltered = (error) => {
  const action = {
    type: FETCH_DATA_FAILURE_PRODUCT_FILTERED,
    payload: error,
  };
  return action;
};
