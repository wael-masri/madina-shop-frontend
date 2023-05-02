import { combineReducers } from "redux";
import BooleanDataReducer from "./BooleanDataReducer";
import DataStaticReducer from "./DataStaticReducer";
import ProductReducer from "./ProductReducer";
import ReviewReducer from "./ReviewReducer";
import CategoryReducer from "./CategoryReducer";
import BrandReducer from "./BrandReducer";
import CartReducer from "./CartReducer";
import OrderReducer from "./OrderReducer";
export default combineReducers({
    dataStatic : DataStaticReducer,
    booleanData : BooleanDataReducer,
    product:ProductReducer,
    review:ReviewReducer,
    category:CategoryReducer,
    brand:BrandReducer,
    cart:CartReducer,
    order:OrderReducer
 
});