import { CHANGE_STATUS_MODE,CHANGE_SATUTS_REVIEW } from "../Types/BooleanDataTypes";

const initialState = {
  isMode: false,
  isReview:false,
};

const BooleanDataReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case CHANGE_STATUS_MODE:
      newState = { ...state };
      newState.isMode = action.payload;
      return newState;
      case CHANGE_SATUTS_REVIEW:
      newState = { ...state };
      newState.isReview = !newState.isReview;
      return newState;
    default:
      return state;
  }
};
export default BooleanDataReducer;
