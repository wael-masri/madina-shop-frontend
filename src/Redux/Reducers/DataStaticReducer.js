import {
  SET_DATA_CURRENCY,
  SET_DATA_LANGUAGE,
  SET_DATA_OPTIONS_CATEGORY,
  SET_DATA_SETTING,
  SET_DATA_SHIPPING,
  SET_LIMIT_REVIEWS,
  SET_PAGE_REVIEWS,
  SET_USER_LOGIN,
  RESET_PAGE_REVIEWS,
  SET_LIMIT_PRODUCTS,
  SET_PAGE_PRODUCTS,
  SET_CATEGORY_FILTER,
  SET_BRAND_FILTER,
  RESET_BRAND_FILTER,
  SET_DATA_SORTING,
  SET_PRICE_SORTING,
  SET_COLOR_FILTER,
  SET_SIZE_FILTER,
  SET_TAG_FILTER,
  SET_DATA_COLOR,
  SET_SEARCH_ITEM,
  SET_WISHLIST_ITEM,
  SET_MENU_ORDER,
  LOG_OUT_ACCOUNT,
  FILTERED_DATA_PRODUCT_HOME,
} from "../Types/StaticData";

const initialState = {
  userLogin: {},
  menuOrder: 1,
  filterHomeData: '63986228a128a69dfb26c40b',
  dataShipping: [
    { value: 10, label: "Standard Shipping $10" },
    { value: 15, label: "Express Shipping $15" },
    { value: 22, label: "2 Day Shipping $22" },
  ],
  dataOptionsCategory: [
    { value: "newess", label: "Newess" },
    { value: "lowtohigh", label: "Low to high" },
    { value: "hightolow", label: "High to low" },
    { value: "rating", label: "Average rating" },
  ],
  dataSetting: [
    { name: "Setting", label: "Setting" },
    { name: "Checkout", label: "Checkout" },
    { name: "Shopping Cart", label: "Shopping Cart" },
    { name: "Wishlist", label: "Wishlist" },
  ],
  dataCurrency: [
    { name: "USD", label: "USD" },
    { name: "LBP", label: "LBP" },
  ],
  dataLanguage: [
    { value: "EN", label: "EN" },
    { value: "AR", label: "Ar" },
  ],
  dataColor: [
    { name: "white" },
    { name: "black" },
    { name: "green" },
    { name: "gray" },
    { name: "red" },
    { name: "yellow" },
  ],
  dataTag: [
    { name: "car" },
    { name: "truck" },
    { name: "sport" },
    { name: "mobile" },
    { name: "iphone" },
    { name: "bmw" },
  ],
  dataSize: [
    { name: "x" },
    { name: "xs" },
    { name: "m" },
    { name: "l" },
    { name: "xl" },
    { name: "xxl" },
  ],
  limitReview: 2,
  pageReview: 1,
  limitProduct: 9,
  pageProduct: 1,
  categoryFilter: "",
  dataSorting: "newess",
  brandFilter: [],
  priceSorting: [0, 80000],
  colorFilter: "",
  sizeFilter: "",
  tagFilter: "",
  searchItem: "",
};

const DataStaticReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case SET_DATA_SHIPPING:
      newState = { ...state };
      newState.dataShipping = action.payload;
      return newState;
    case SET_DATA_OPTIONS_CATEGORY:
      newState = { ...state };
      newState.dataOptionsCategory = action.payload;
      return newState;
    case RESET_PAGE_REVIEWS:
      newState = { ...state };
      newState.pageReview = 1;
      return newState;
    case SET_DATA_CURRENCY:
      newState = { ...state };
      newState.dataCurrency = action.payload;
      return newState;
    case SET_LIMIT_REVIEWS:
      newState = { ...state };
      newState.limitReview = action.payload;
      return newState;
    case SET_PAGE_REVIEWS:
      newState = { ...state };
      newState.pageReview += action.payload;
      return newState;
    case SET_DATA_LANGUAGE:
      newState = { ...state };
      newState.dataLanguage = action.payload;
      return newState;
    case SET_DATA_SETTING:
      newState = { ...state };
      newState.dataSetting = action.payload;
      return newState;
    case SET_USER_LOGIN:
      newState = { ...state };
      newState.userLogin = action.payload;
      return newState;
    case SET_LIMIT_PRODUCTS:
      newState = { ...state };
      newState.limitProduct = action.payload;
      return newState;
    case SET_PAGE_PRODUCTS:
      newState = { ...state };
      newState.pageProduct = action.payload;
      return newState;
    case SET_CATEGORY_FILTER:
      newState = { ...state };
      newState.pageProduct = 1;
      newState.categoryFilter = action.payload;
      return newState;
    case SET_BRAND_FILTER:
      newState = { ...state };
      newState.pageProduct = 1;
      let oldBrandFilter = [...newState.brandFilter];
      if (oldBrandFilter.includes(action.payload)) {
        newState.brandFilter = oldBrandFilter.filter(
          (val) => val !== action.payload
        );
      } else {
        oldBrandFilter.push(action.payload);
        newState.brandFilter = oldBrandFilter;
      }
      return newState;
    case RESET_BRAND_FILTER:
      newState = { ...state };
      newState.pageProduct = 1;
      newState.brandFilter = [];
      return newState;
    case SET_DATA_SORTING:
      newState = { ...state };
      newState.pageProduct = 1;
      newState.dataSorting = action.payload;
      return newState;
    case SET_PRICE_SORTING:
      newState = { ...state };
      newState.pageProduct = 1;
      newState.priceSorting = action.payload;
      return newState;
    case SET_COLOR_FILTER:
      newState = { ...state };
      newState.pageProduct = 1;
      newState.colorFilter = action.payload;
      return newState;
    case SET_SIZE_FILTER:
      newState = { ...state };
      newState.pageProduct = 1;
      newState.sizeFilter = action.payload;
      return newState;
    case SET_TAG_FILTER:
      newState = { ...state };
      newState.pageProduct = 1;
      newState.tagFilter = action.payload;
      return newState;
    case SET_DATA_COLOR:
      newState = { ...state };
      newState.dataColor = action.payload;
      return newState;
    case SET_SEARCH_ITEM:
      newState = { ...state };
      newState.searchItem = action.payload;
      return newState;
    case SET_WISHLIST_ITEM:
      newState = { ...state };
      newState.userLogin = action.data;
      return newState;
    case SET_MENU_ORDER:
      newState = { ...state };
      newState.menuOrder = action.payload;
      return newState;

    case LOG_OUT_ACCOUNT:
      newState = { ...state };
      newState.menuOrder = 1;
      newState.userLogin = {};
      return newState;
    case FILTERED_DATA_PRODUCT_HOME:
      newState = { ...state };
      newState.filterHomeData = action.category;
      return newState;
    default:
      return state;
  }
};
export default DataStaticReducer;
