
import { GET_SINGLE_TOUR_REQUEST } from "./action";

const initialState = {
  homePage: [
    
  ],
  tourObj: {},
};
const tourDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_TOUR_REQUEST:
      return { ...state, tourObj: payload };
    default:
      return state;
  }
};

export { tourDetailReducer };
