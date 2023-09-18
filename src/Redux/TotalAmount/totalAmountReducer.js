import { MAKE_PAYMENT } from "./action";

const initialState = {
  id: "",
};
const totalAmountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MAKE_PAYMENT: {
      return {...state,id:payload}
    }
    default:
      return state;
  }
};

export { totalAmountReducer };
