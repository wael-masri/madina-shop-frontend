import UserApi from "../../Api/UserApi";
import {
  SET_DATA_OPTIONS_CATEGORY,
  RESET_PAGE_REVIEWS,
  SET_DATA_SHIPPING,
  SET_LIMIT_REVIEWS,
  SET_PAGE_REVIEWS,
  SET_USER_LOGIN,
  SET_LIMIT_PRODUCTS,
  SET_PAGE_PRODUCTS,
  SET_CATEGORY_FILTER,
  SET_BRAND_FILTER,
  RESET_BRAND_FILTER,
  SET_DATA_SORTING,
  SET_PRICE_SORTING,
  SET_TAG_FILTER,
  SET_SIZE_FILTER,
  SET_COLOR_FILTER,
  SET_SEARCH_ITEM,
  SET_WISHLIST_ITEM,
  SET_MENU_ORDER,
  LOG_OUT_ACCOUNT,
  FILTERED_DATA_PRODUCT_HOME,
} from "../Types/StaticData";

export const setDataShipping = (payload) => {
  const action = { type: SET_DATA_SHIPPING, payload };
  return action;
};
export const setDataOptionsCategory = (payload) => {
  const action = { type: SET_DATA_OPTIONS_CATEGORY, payload };
  return action;
};

export const setUserLogin = (payload) => {
  const action = {
    type: SET_USER_LOGIN,
    payload,
  };
  return action;
};

export const setLimitReview = (payload) => {
  const action = {
    type: SET_LIMIT_REVIEWS,
    payload,
  };
  return action;
};
export const setPageReview = (payload) => {
  const action = {
    type: SET_PAGE_REVIEWS,
    payload,
  };
  return action;
};
export const resetPageReview = () => {
  const action = {
    type: RESET_PAGE_REVIEWS,
  };
  return action;
};

export const setLimitProducts = (payload) => {
  const action = {
    type: SET_LIMIT_PRODUCTS,
    payload,
  };
  return action;
};
export const setPageProducts = (payload) => {
  const action = {
    type: SET_PAGE_PRODUCTS,
    payload,
  };
  return action;
};

export const setCategoryFilter = (payload) => {
  const action = {
    type: SET_CATEGORY_FILTER,
    payload,
  };
  return action;
};
export const setBrandFilter = (payload) => {
  const action = {
    type: SET_BRAND_FILTER,
    payload,
  };
  return action;
};
export const resetBrandFilter = () => {
  const action = {
    type: RESET_BRAND_FILTER,
  };
  return action;
};
export const setDataSorting = (payload) => {
  const action = {
    type: SET_DATA_SORTING,
    payload
  };
  return action;
};
export const setPriceSorting = (payload) => {
  const action = {
    type: SET_PRICE_SORTING,
    payload
  };
  return action;
};

export const setColorFilter = (payload) => {
  const action = {
    type: SET_COLOR_FILTER,
    payload
  };
  return action;
};

export const setSizeFilter = (payload) => {
  const action = {
    type: SET_SIZE_FILTER,
    payload
  };
  return action;
};

export const setTagFilter = (payload) => {
  const action = {
    type: SET_TAG_FILTER,
    payload
  };
  return action;
};
export const setSearchItem = (payload) => {
  const action = {
    type: SET_SEARCH_ITEM,
    payload
  };
  return action;
};
export const setWishlistItem = async (dispatch,id,payload) => {
  const updateWishlist = await UserApi.update(id,payload);
  if(updateWishlist){
    const action = {
      type: SET_WISHLIST_ITEM,
      data:updateWishlist.data
    };
    return dispatch(action);
  }
  
};

export const setMenuOrder = (payload) => {
  const action = {
    type: SET_MENU_ORDER,
    payload
  };
  return action;
};
export const logOutAccount = () => {
  const action = {
    type: LOG_OUT_ACCOUNT,
    
  };
  return action;
};

export const setDataFilterHome = (category) => {
  const action = {
    type: FILTERED_DATA_PRODUCT_HOME,
    category
    
  };
  return action;
};
