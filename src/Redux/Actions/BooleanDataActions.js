import { CHANGE_STATUS_MODE,CHANGE_SATUTS_REVIEW } from "../Types/BooleanDataTypes";


export const changeStatusMode = (stts) => {
    const action = { type: CHANGE_STATUS_MODE, payload:stts };
    return action;
}
export const changeStatusReview = () => {
    const action = { type: CHANGE_SATUTS_REVIEW};
    return action;
}