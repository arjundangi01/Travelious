import { GET_SINGLE_TOUR_REQUEST } from "./action";

const initialState = {};
const tourDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_TOUR_REQUEST:
      return payload
    default:
      return state;
  }
};

export { tourDetailReducer };
